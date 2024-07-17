const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/detalles_ventas.json');

const getDetalleVentas = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveDetalleVentas = (detalleVentas) => {
  fs.writeFileSync(filePath, JSON.stringify(detalleVentas, null, 2));
};

module.exports = {
  getDetalleVentas,
  saveDetalleVentas
};
