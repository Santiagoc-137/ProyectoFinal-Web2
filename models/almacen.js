const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/almacenes.json');

const getAlmacenes = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveAlmacenes = (almacenes) => {
  fs.writeFileSync(filePath, JSON.stringify(almacenes, null, 2));
};

module.exports = {
  getAlmacenes,
  saveAlmacenes
};
