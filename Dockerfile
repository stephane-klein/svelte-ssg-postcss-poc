FROM node:16-alpine

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM nginx:1.21

COPY --from=0 /app/docs/ /usr/share/nginx/html
