FROM node:16.13.0-slim

WORKDIR /app

COPY src src
COPY package.json package.json

RUN npm install

CMD ["node", "src/index.js"]