FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM httpd:2.4 AS prod
COPY --from=build /app/build /usr/local/apache2/htdocs/
EXPOSE 80
