// Endpoint para el inicio de sesión
const router = require('express').Router();

const noticias = require('../controllers/noticias');
const estilos= require  ('../controllers/estilos');

router.get('/noticias', noticias.obtenerNoticias);
router.post('/noticias', noticias.crearNoticias);

router.get('/estilo', estilos.obtenerEstilo);
router.put('/estilo', estilos.actualizarEstilo);

module.exports = router;
