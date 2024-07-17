const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/vehiculos.json');

const getVehiculos = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveVehiculos = (vehiculos) => {
  fs.writeFileSync(filePath, JSON.stringify(vehiculos, null, 2));
};

module.exports = {
  getVehiculos,
  saveVehiculos
};
