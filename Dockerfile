FROM node:23-alpine3.20

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["node", "build"]