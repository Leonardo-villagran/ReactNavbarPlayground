# Trabajo Práctico 2 
## React Navbar Playground de DesafioLatam para el módulo: Backend con Node y Express (G27)

* Este repositorio contiene una aplicación back en Express (con un archivo llamado navbar.sql con la configuración de las tablas requeridas) y una aplicación Front en React.
* Tanto el servidor Back, la base de datos y el Front deben configurarse por separado. 
* Para poder obtener los resultados esperados, se deben ejecutar los 3 sistemas mencionados anteriormente.  
* El sistema consiste en una aplicación en React, la cual permite ingresar nuevos títulos de menú y sus secciones asociadas, y nuevos estilos para el cambiar el color del background del menú y el color sus textos, utillizando formularios que se conectan a un servidor back y una base de datos de tipo postgres.   

## Backend de la Aplicación

```markdown

## Requisitos

- Node.js
- PostgreSQL

## Configuración de la Base de Datos

1. Asegúrate de tener PostgreSQL instalado y en funcionamiento en tu entorno local.

2. Crea una base de datos llamada "navbar" en PostgreSQL.

3. Ejecuta los siguientes comandos SQL para crear las tablas y los datos necesarios para iniciar:

   CREATE TABLE menu (
     id SERIAL PRIMARY KEY,
     titulo VARCHAR NOT NULL,
     ruta VARCHAR NOT NULL
   );

   CREATE TABLE estilo (
     id SERIAL PRIMARY KEY,
     colorfondo VARCHAR NOT NULL,
     colortexto VARCHAR NOT NULL
   );

   INSERT INTO estilo VALUES (DEFAULT, 'black', 'white');

## Configuración

1. Clona este repositorio en tu máquina local.

2. Instala las dependencias ejecutando el siguiente comando:

   npm install

3. Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración (esto es solo un ejemplo, utiliza tus propias variables de entorno):

   ```
   ## Configuración localhost
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=navbar
   JWT_SECRET=desafio_latam
   PORT=3000
   ```

   Asegúrate de configurar los valores adecuados según tu entorno.

4. Inicia el servidor ejecutando el siguiente comando:

   ```bash
   npm start
   ```

   El servidor se iniciará en `http://localhost:3000`.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura:

```
- src
  - controllers
    - noticias.js
    - estilos.js
  - routes
    - routes.js
- server.js
- .env
```

- `server.js` es el punto de entrada principal del servidor.
- `router.js` contiene las rutas y controladores para diferentes endpoints.
- `src/controllers` contiene los controladores para las diferentes funcionalidades de la aplicación.
- `src/routes` contiene el archivo `routes.js` que maneja las rutas y utiliza los controladores correspondientes.

## Rutas Principales

### Inicio de Sesión

- `GET /noticias`: Obtiene las noticias.
- `POST /noticias`: Crea una nueva noticia.
- `GET /estilo`: Obtiene el estilo.
- `PUT /estilo`: Actualiza el estilo.

## Frontend de la Aplicación

```markdown

Este es el frontend de una aplicación construida con React.js y React Router. El cual se conecta al servidor back con Express, para la manipulación y administración de la base de datos. 

## Requisitos

- Node.js
- Navegador web compatible con React

## Configuración

1. Clona este repositorio en tu máquina local.

2. Instala las dependencias ejecutando el siguiente comando:

   npm install

3. Inicia el servidor del backend siguiendo las instrucciones proporcionadas en el archivo `README.md` del backend el servidor back esté en el puerto : 3000 
    .

4. Inicia la aplicación ejecutando el siguiente comando:

   npm start

   La aplicación se abrirá en tu navegador web en la dirección `http://localhost:3001`.

    Siempre y cuando el servidor back esté en el puerto : 3000 

## Estructura del Proyecto

El proyecto sigue la siguiente estructura:

```
- src
  - components
    - Navbar.js
  - views
    - Home.js
    - Default.js
  - Context
    - Context.js
  - App.js
- styles.css
- package.json
```

- `src/components/Navbar.js` contiene el componente de la barra de navegación.
- `src/views/Home.js` contiene la vista principal de la página de inicio.
- `src/views/Default.js` contiene las vistas por defecto que se muestra al consultar las rutas diferentes a la de inicio.
- `src/Context/Context.js` contiene el contexto global utilizado para almacenar el estado compartido entre componentes.
- `src/App.js` es el punto de entrada principal de la aplicación.

## Funcionalidades Principales

- El estado global se maneja utilizando el contexto de React.
- El formulario para agregar una nueva opción al Navbar invoca el setter correspondiente al presionar el botón "agregar".
- El formulario de estilos modifica la apariencia del Navbar al tipear en los inputs (evento onChange).
- La opción "Home" siempre está disponible en el Navbar.
- Se aplica la clase "active" en la opción que corresponde según la ruta que se consulta.
- Al ingresar en una opción diferente a "Home", se renderiza una vista por defect, que se obtiene del back, que indica en texto cuál es la ruta que se está consultando.

