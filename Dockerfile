FROM node:16.9.0-alpine3.14

WORKDIR /app

COPY src src
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

CMD ["node", "src/index.js"]