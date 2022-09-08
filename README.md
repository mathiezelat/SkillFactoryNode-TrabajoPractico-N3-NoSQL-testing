# Skill Factory Node - Trabajo Práctico 3 (Migración a NoSQL) (Testing) - Mathías Ezequiel Latrónico

## Tarea

- Migración del TP 3 hecho con MySQL y Prisma a Mongoose (ODM de MongoDB) 

- Con los archivos provistos, rellenar las funciones y testearlas en un archivo aparte. Haciendo uso de Mocha y Chai.
Tambien en el main.test.js terminar de escribir los test de las peticiones PUT y DELETE

## Documentación

### Instalar las dependencias
```sh
npm install
```

### Iniciar en modo desarrollo
```sh
npm run dev
```

### Iniciar en modo producción
```sh
npm start
```

### Iniciar los tests
```sh
npm test
```

## Peticiones API en local

### CRUD - Create Read Update Delete

`http://localhost:3000/api/v1/users`
```json
{
	"name": "Thor",
	"age": 1500,
	"email": "thor@gmail.com",
	"country": "Asgard"
}
```

`http://localhost:3000/api/v1/categories`
```json
{
	"name": "Programming"
}
```

`http://localhost:3000/api/v1/posts`
```json
{
	"title": "Hello World",
	"content": "This is a content",
	"authorId": 1,
	"categories": { "connect": [{"id": 1}] }
}
```