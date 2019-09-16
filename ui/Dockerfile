FROM node:10.16.3-jessie
MAINTAINER Ben Ripkens "ben@instana.com"
COPY . /opt/ui
WORKDIR /opt/ui
RUN npm install && \
  npm run build
CMD ["node", "server.js"]
