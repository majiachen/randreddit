FROM node:22-alpine
LABEL authors="jack"

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve","-s", "dist"]