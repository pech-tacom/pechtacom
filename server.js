const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const WebSocket = require('ws');
const chokidar = require('chokidar');

const PORT = 3000;
const WATCH_DIR = '/app';

const RELOAD_SCRIPT = `
<script>
  const ws = new WebSocket('ws://' + location.hostname + ':${PORT}');
  ws.onmessage = () => location.reload();
  ws.onclose = () => setTimeout(() => location.reload(), 1000);
</script>`;

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Inject reload script into HTML responses
app.use((req, res, next) => {
  let urlPath = req.path === '/' ? '/index.html' : req.path;
  if (!urlPath.endsWith('.html')) return next();

  const filePath = path.join(WATCH_DIR, urlPath);
  if (!fs.existsSync(filePath)) return next();

  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace('</body>', RELOAD_SCRIPT + '</body>');
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.use(express.static(WATCH_DIR));

// Watch for file changes with polling (required for Podman/Docker on macOS)
chokidar.watch(WATCH_DIR, {
  ignored: /(node_modules|\.git)/,
  usePolling: true,
  interval: 300,
  ignoreInitial: true,
}).on('change', (filePath) => {
  console.log(`Changed: ${filePath} — reloading...`);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.send('reload');
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
});
