# **ADAHACK | BE - 5**

## Projeto

## Stacks

| Stack   | Version       | 
| :---------- | :--------- | 
| node |  | 
| typescript |  | 
| express |  | 
| prisma |  | 
| prettier |  | 
| eslint |  | 
| dotenv |  | 
| multer |  | 
| csv-parser |  | 

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`DATABASE_URL`

## Instalação

1. Instalação das dependências
- Dependência: [NodeJS](https://nodejs.org/en/download)
```
npm install
```

2. Crie o **.env** na raiz do projeto, copie e cole o conteúdo do **.env.example**

3. Subir banco de dados **[ PostgreSql ]**
- Dependência: [Docker](https://www.docker.com/get-started/)
```
docker compose up -d
```

4. Executar migrate prisma **[ Criação das tabelas ]**
```
npx prisma migrate dev
```

5. Buildar o projeto
```
npm run build
```

6. Executar o servidor
```
npm run start
```
___

### Participantes
___
- [@allexandrecardos](https://github.com/allexandrecardos)
- [@LuisOtavio1](https://github.com/LuisOtavio1)
- [@RubensLFerreira](https://github.com/RubensLFerreira)
- [@almeidapietra](https://github.com/almeidapietra)
- [@pedrohrds1921](https://github.com/pedrohrds1921)
- [@ZanetteCiriaco](https://github.com/ZanetteCiriaco)
