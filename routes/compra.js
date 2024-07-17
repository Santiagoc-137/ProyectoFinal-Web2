const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

// Rutas para compras
router.post('/', compraController.createCompra);
router.get('/', compraController.getCompras);
router.get('/:id', compraController.getCompraById);
router.put('/:id', compraController.updateCompra);
router.delete('/:id', compraController.deleteCompra);

module.exports = router;
