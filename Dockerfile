FROM node:16.19 as build-env

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest as server-env

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

WORKDIR /usr/share/nginx/html

COPY --from=build-env /build .