const express = require('express');
const router = express.Router();
const concesionarioController = require('../controllers/concesionarioController.js');

router.post('/', concesionarioController.createConcesionario);
router.get('/', concesionarioController.getConcesionarios);
router.get('/:id', concesionarioController.getConcesionarioById);
router.put('/:id', concesionarioController.updateConcesionario);
router.delete('/:id', concesionarioController.deleteConcesionario);

module.exports = router;
