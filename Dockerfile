FROM node:16.9.0-slim

WORKDIR /app

COPY src src
COPY package.json package.json

RUN npm install

CMD ["node", "src/index.js"]