# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json e instalar dependencias
COPY package.json ./
RUN npm install

# Copiar todo el código
COPY . .

# Exponer el puerto para el servicio de logout
EXPOSE 3005

# Comando para iniciar el servidor
CMD ["node", "index.js"]
