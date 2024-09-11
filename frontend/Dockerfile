# Usar a imagem oficial do Node.js para o frontend
FROM node:20-alpine

# Definir o diretorio de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json para o container
COPY package*.json ./

# Instalar as dependencias do React
RUN npm install

# Copiar o codigo do frontend para a pasta de trabalho
COPY . .

# Compilar a aplicacao React
## RUN npm run build

# Instalar um servidor HTTP simples para servir a aplicacao React
## RUN npm install -g serve (p/ producao)

# Expor a porta 3000 para o servidor HTTP
EXPOSE 3000

# Comando para iniciar o servidor e servir os arquivos estaticos do React
## CMD ["serve", "-s", "build", "-l", "3000"] (p/ producao)
CMD ["npm", "start"]