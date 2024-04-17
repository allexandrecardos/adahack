# **ADAHACK | BE - 5**

## Projeto

## Stacks

| Stack   | Version       | 
| :---------- | :--------- | 
| node | 20.11.1 | 
| typescript | ^5.4.5 | 
| express | ^4.19.2 | 
| prisma | ^5.12.1 | 
| prettier | ^3.2.5 | 
| eslint | ^8.57.0 | 
| dotenv | ^16.4.5 | 
| multer |  | 
| csv-parser |  | 
| bcrypt | ^5.1.1 | 
| http-status-codes | ^2.3.0 | 
| jsonwebtoken | ^9.0.2 | 
| yup | ^1.4.0 | 

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
