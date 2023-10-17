/**
 * Cómo debes utilizar el proyecto.
 * 
 * Este archivo es el punto de partida. Aquí:
 *     a) Creas el servidor web.
 *     b) Configuras tu servidor para:
 *         b.1) Recibir peticiones en el puerto 3000
 *         b.2) Recibir las peticiones y direccionarlo a las rutas correspondientes.
 * 
 * Para iniciar el proyecto requieres ejecutarlo:
 * 1. Desde tu visual studio code
 * 2. Desde una terminal (en la carpeta donde está este archivo) ejecutando el comando:
 *     > node app.js
 * 
 * Recuerda que para acceder a la carpeta, deberás escribir en la terminal el comando
 * > cd /path/to/folder <- Sustituye la ruta al folder donde tienes el archivo app.js
 * 
 * A su vez, dentro de la carpeta, instala las dependencias necesarias:
 * > npm install express
 * > npm install body-parser
 * > npm install cors
 * > npm install mysql2
 */


//Incluye en tu proyecto las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/route')


/**
 * Paso 1: Crear el servidor con Express.
 */
const app = express();
const port = 3000;

/** 
 * Configuración del servidor web.
 * 1. Cors es una configuración requerida. 
 *     https://es.wikipedia.org/wiki/Intercambio_de_recursos_de_origen_cruzado#:~:text=El%20intercambio%20de%20recursos%20de,que%20sirvi%C3%B3%20el%20primer%20recurso. 
 * 2. BodyParser nos permitirá recibir información en un formato llamado JSON
 *    JavaScript Object Notation.
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Paso 2: Crear algunos endpoints básicos para el crud.
 * Para ver todos los endpoints agregados al momento, consulta el archivo /routes/route.js
 */
app.use(router);


// Primer endpoint que se crea en el app web. Simplemente respode un mensaje cuando haces una petición a la url: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello world!')
});

//arranque del server 
app.listen(port, () => {
    console.log('Server started running on : ' + port)
})