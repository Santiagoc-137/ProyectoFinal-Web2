const { getConcesionarios, saveConcesionarios } = require('../models/consecionario');

exports.createConcesionario = (req, res) => {
  const concesionarios = getConcesionarios();
  const nuevoConcesionario = {
    id: concesionarios.length + 1,
    nombre: req.body.nombre,
    direccion: req.body.direccion
  };
  concesionarios.push(nuevoConcesionario);
  saveConcesionarios(concesionarios);
  res.status(201).send(nuevoConcesionario);
};

exports.getConcesionarios = (req, res) => {
  const concesionarios = getConcesionarios();
  res.status(200).send(concesionarios);
};

exports.getConcesionarioById = (req, res) => {
  const concesionarios = getConcesionarios();
  const concesionario = concesionarios.find(concesionario => concesionario.id === parseInt(req.params.id));
  if (!concesionario) {
    return res.status(404).send('Concesionario no encontrado');
  }
  res.status(200).send(concesionario);
};

exports.updateConcesionario = (req, res) => {
  const concesionarios = getConcesionarios();
  const index = concesionarios.findIndex(concesionario => concesionario.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Concesionario no encontrado');
  }
  const updatedConcesionario = {
    id: parseInt(req.params.id),
    nombre: req.body.nombre,
    direccion: req.body.direccion
    // Otros campos actualizados según tu modelo
  };
  concesionarios[index] = updatedConcesionario;
  saveConcesionarios(concesionarios);
  res.status(200).send(updatedConcesionario);
};

exports.deleteConcesionario = (req, res) => {
  const concesionarios = getConcesionarios();
  const index = concesionarios.findIndex(concesionario => concesionario.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Concesionario no encontrado');
  }
  concesionarios.splice(index, 1);
  saveConcesionarios(concesionarios);
  res.status(200).send('Concesionario eliminado correctamente');
};
