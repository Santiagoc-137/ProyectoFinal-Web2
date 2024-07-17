const express = require('express');
const router = express.Router();
const detalleVentaController = require('../controllers/detalleVentaController');

// Rutas para detalles de venta
router.post('/', detalleVentaController.createDetalleVenta);
router.get('/', detalleVentaController.getDetalleVentas);
router.get('/:id', detalleVentaController.getDetalleVentaById);
router.put('/:id', detalleVentaController.updateDetalleVenta);
router.delete('/:id', detalleVentaController.deleteDetalleVenta);

module.exports = router;
