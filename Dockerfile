FROM node:16.10.0-alpine as builddev
WORKDIR /app
COPY . .
# COPY yarn.lock /app/yarn.lock

RUN yarn install
RUN yarn build

# FROM nginx:alpine as builder
FROM nginx:1.20-alpine as builder
COPY --from=builddev /app/build /usr/share/nginx/html

EXPOSE 80