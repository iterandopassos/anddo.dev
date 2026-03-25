# Estágio 1: Build do React
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servidor Web (Nginx)
FROM nginx:alpine
# Se você usa Vite, a pasta é 'dist'. Se usa Create React App, é 'build'.
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]