# Etapa 1: Construcción de la app Angular
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration production

# Etapa 2: Servir la app con Nginx
FROM nginx:alpine

# Copia el build de Angular al directorio de Nginx
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Copia configuración personalizada de Nginx si la tienes
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]