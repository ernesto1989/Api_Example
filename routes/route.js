//Importa a tu archivo route.js las dependencias que se requieren
const express = require('express');
const zonasController = require('../api/zonas.js'); // import del archivo que tiene la lógica de manejo de peticiones
const router = express.Router();

//Al router le damos todas las urls y los métodos que van a procesar las peticiones web.
router.get('/api/getZonas', zonasController.getZonas);
router.post('/api/findZona', zonasController.findById);
router.post('/api/addZona', zonasController.insertZona);
router.put('/api/updateZona', zonasController.updateZona);
router.delete('/api/deleteZona', zonasController.deleteZona);

//le decimos a Node que queremos hacer uso de nuestro router en otros archivos (como por ejemplo, app.js)
module.exports = router;