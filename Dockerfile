FROM node:16.20-alpine as builder

COPY package*.json .

WORKDIR /app

RUN npm ci --silent

COPY . .

ENV REACT_APP_API_URL=http://script-panel.ru
ENV REACT_APP_BOT_URL=https://niksemenov.ru
ENV REACT_APP_STATIC_URL=https://niksemenov.ru

RUN npm run build

FROM nginx:alpine

EXPOSE 3000

COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

