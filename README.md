# api.wine-locals-test

Api desenvolvida para um teste técnico.
O teste consiste em construir uma api e uma SPA para exibir alguns restaurantes, seus respectivos pratos e adicionar novo prato a um restaurante.

## Tecnologias
  * Nodejs
  * Express
  * Mongodb
  * Mongoose
  * Typescript
  
## Requerimentos
Para rodar a api localmente é necessário:
* [docker](https://docs.docker.com/engine/install/) e [docker-compose](https://docs.docker.com/compose/install/)
  * São necessários pois o banco de dados é construido localmente via docker utilizando o docker-compose.
* [npm](https://www.npmjs.com/) ou [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
* nodejs

## Configurando e iniciando a api
1 - Para inciar a api, deve-se primeiro instalar as dependencias necessárias, para isso, acesse a pasta raiz do projeto e rode um dos comandos abaixo:
  * `npm install` ou `yarn`
  
2 - Depois das depêndencias instaladas, é preciso configurar o banco. Para isso, com o docker e o docker-compose já instalados, ainda na pasta raiz da api e rode o comando ` docker-compose up -d`

3 - Após isso, ainda na pasta raiz, basta rodar alguns dos comandos abaixo: 
  * `npm run dev` ou `yarn dev` : Inicia a api em modo de desenvolvimento com auto reload
  * `npm start` ou `yarn start`: Inicia a api em modo de "produção"

Pronto! A api estará rodando na porta padrão (3000) ou na porta que você configurou o .env (caso o tenha modificado)

Quando a api é criada um usuário de teste é disponibilizado para realizar a autenticação:
```
  {
	  "email": "cleitonbomdeguerra@olimpus.com",
	  "password": "ihatezeus123"
  } 
```

## Utilizando a api
A api funciona no padrão REST com os seguintes endpoints:
  *OBS:* _É necessário a utilização de um Bearer token no header de autenticação em alguns endpoints_
  
  *Exemplo de Authorization header* : ` Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE5NmVhOWZhM2Y4YjZhZmIzNzE1OSIsImlhdCI6MTY0MzkzNTI1NCwiZXhwIjoxNjQzOTM4ODU0fQ.cZHXz3hOCRn_S7Smhc_vkzg-v56rdT9EN4t9AL-5NpY `
 O token é retornado no enndpoint `/auth`
 
 ### Endpoints da API
 * [/](http://localhost:3000/healthcheck) : 
    * `GET` : Serve apenas como healthcheck da api.
    
 * [/auth](http://localhost:3000/auth) : 
    * `POST`: Serve para autenticar um usuário, passando o seguinte peyload:
      ```
        {
	        "email": "email",
	        "password": "senha"
        } 
      ```
      Se a autenticação funcionar, será retornado um token jwt que será utilizado no header `Authorization`.
      
  * [/restaurants](http://localhost:3000/restaurants) : 
    * `GET` : Lista os restaurantes cadastraados.
    
  * [/restaurants/:restaurant_id](http://localhost:3000/restaurants/62c384eb14b88c76c52bc245) : 
    * `GET` : Lista as infos de um restaurante especifico (restaurant_id)
    
  * [/dishes/restaurant/:restaurant_id](http://localhost:3000/dishes/restaurant/62c384eb14b88c76c52bc245) : 
    * `GET` : Lista os pratos de um restaurante (restaurant_id).
    
  * [/dishes/new](http://localhost:3000/dishes/new) : 
    * `POST`: Cria um novo prato no restaurante selecionado
      ```
        {
	        "name": "Nome do prato",
	        "description": "descrição do prato",
          "value": "Valor do prato",
          "restaurant_id": "Id do restaurante detentor do prato"
        } 
      ```
      Caso o prato seja criado com sucesso, será retornado o objeto correspondente.


## Frontend
* Para uma utilização visual
	* Acesse o frontend: https://github.com/mateusdreher/app.wine-locals-test
