# USERS RANDOM DATA API

App desarrollada en el framework Nuxt 3. Tiene el objetivo de mostrar un listado de usuarios
y averiguar datos sobre el usuario que se elija.
Hace consumo de Random Data API https://random-data-api.com/documentation

## Pre-requisitos

* Node v18.16.1
* NPM 9.5.1

## Instalación
Instalar las dependencias del archivo package.json

```Bash
$ npm install
```

## Variables de entorno
API_BACK_URL: no es necesaria debido a que esta definida por default 
pero si se quiere modificar el tamaño de la respuesta editar size

API_BACK_URL='https://random-data-api.com/api/v2/users?size=20&response_type=json'

### Despliegue Local
```Bash
$ npm run dev
```
### Despliegue red local
```Bash
$ npm run dev -- --host 0.0.0.0
```

### Abrir aplicación
Ir al siguiente enlace reemplazando localhost y el puerto según el caso, ej:
http://localhost:3000/users/