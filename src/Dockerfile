# Estágio 1: Build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servidor Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Se estiver usando create-react-app, mude '/app/dist' para '/app/build'

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]