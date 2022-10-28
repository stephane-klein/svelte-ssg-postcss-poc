FROM node:16-alpine
RUN npm install -g pnpm@7.9.5
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

FROM nginx:1.21

COPY --from=0 /app/build/ /usr/share/nginx/html
