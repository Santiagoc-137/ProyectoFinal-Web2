const { getAlmacenes, saveAlmacenes } = require('../models/almacen');

exports.createAlmacen = (req, res) => {
  const almacenes = getAlmacenes();
  const nuevoAlmacen = {
    id: almacenes.length + 1,
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion
  };
  almacenes.push(nuevoAlmacen);
  saveAlmacenes(almacenes);
  res.status(201).send(nuevoAlmacen);
};

exports.getAlmacenes = (req, res) => {
  const almacenes = getAlmacenes();
  res.status(200).send(almacenes);
};

exports.getAlmacenById = (req, res) => {
  const almacenes = getAlmacenes();
  const almacen = almacenes.find(almacen => almacen.id === parseInt(req.params.id));
  if (!almacen) {
    return res.status(404).send('Almacén no encontrado');
  }
  res.status(200).send(almacen);
};

exports.updateAlmacen = (req, res) => {
  const almacenes = getAlmacenes();
  const index = almacenes.findIndex(almacen => almacen.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Almacén no encontrado');
  }
  const updatedAlmacen = {
    id: parseInt(req.params.id),
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion
  };
  almacenes[index] = updatedAlmacen;
  saveAlmacenes(almacenes);
  res.status(200).send(updatedAlmacen);
};

exports.deleteAlmacen = (req, res) => {
  const almacenes = getAlmacenes();
  const index = almacenes.findIndex(almacen => almacen.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send('Almacén no encontrado');
  }
  almacenes.splice(index, 1);
  saveAlmacenes(almacenes);
  res.status(200).send('Almacén eliminado correctamente');
};
