const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/clientes.json');

const getClientes = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveClientes = (clientes) => {
  fs.writeFileSync(filePath, JSON.stringify(clientes, null, 2));
};

module.exports = {
  getClientes,
  saveClientes
};
