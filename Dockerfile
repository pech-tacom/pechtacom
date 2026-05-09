FROM node:20-alpine
RUN npm install -g browser-sync
WORKDIR /app
EXPOSE 3000 3001
CMD ["browser-sync", "start", \
     "--server", \
     "--files", "**/*.html,**/*.css,**/*.js,assets/**", \
     "--no-notify", \
     "--host", "0.0.0.0", \
     "--port", "3000", \
     "--ui-port", "3001", \
     "--poll"]
