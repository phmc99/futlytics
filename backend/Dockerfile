# Usando uma imagem oficial do Python
FROM python:3.12-slim

# Definir o diretorio de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo requirements.txt para o container
COPY requirements.txt .

# Instalar as dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o codigo fonte para a pasta de trabalho no container
COPY . .

# Expor a porta usada pela API Flask
EXPOSE 5000

# Comando para rodar a aplicacao Flask
CMD ["python", "app.py"]
