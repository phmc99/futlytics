# Futlytics

Futlytics é um site para acompanhar as principais estatísticas de futebol em tempo real, utilizando uma API de dados de futebol e apresentando visualizações no frontend.

## Requisitos

- **Docker**: Certifique-se de ter o Docker instalado. Para verificar, execute:

```bash
docker --version
```
- Versão Recomendável do Docker: 20.10.x ou superior

## Como Iniciar o Projeto

Para rodar o projeto utilizando o Docker e Docker Compose, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/phmc99/futlytics.git
    ```

2. Entre no diretório do projeto:
    ```bash
    cd futlytics
    ```

3. Construa e inicie os containers com Docker Compose:

    Utilize o seguinte comando para construir as imagens e rodar os containers para o backend (Flask) e o frontend (React):
    ```bash
    docker-compose up --build
    ```

    Esse comando:

    - Constrói as imagens do Docker para o frontend (React) e backend (Flask).
    - Inicia os containers e mapeia as portas corretamente.

4. Acesse o projeto:
    - Frontend React: Acesse o frontend em http://localhost:3000.
    - Backend Flask: Acesse a API do backend em http://localhost:5000.


Esse `README.md` fornece instruções claras sobre como configurar o ambiente com Docker, como rodar o projeto e acessar as diferentes partes do sistema (frontend e backend).

## Autores

- [@phmc99](https://www.github.com/phmc99)
