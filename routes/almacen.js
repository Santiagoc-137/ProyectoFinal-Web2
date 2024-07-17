const express = require('express');
const router = express.Router();
const almacenController = require('../controllers/almacenController');

router.post('/', almacenController.createAlmacen);
router.get('/', almacenController.getAlmacenes);
router.get('/:id', almacenController.getAlmacenById);
router.put('/:id', almacenController.updateAlmacen);
router.delete('/:id', almacenController.deleteAlmacen);

module.exports = router;
