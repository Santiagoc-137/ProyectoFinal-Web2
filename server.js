const express = require('express');
const bodyParser = require('body-parser');

const concesionarioRoutes = require('./routes/concesionario');
const vehiculoRoutes = require('./routes/vehiculo');
const almacenRoutes = require('./routes/almacen');
const clienteRoutes = require('./routes/cliente'); 
const insumoRoutes = require('./routes/insumos');
const empleadosRoutes = require ('./routes/empleados')
const detalleventaRoutes = require ('./routes/detallleventa')
const compraRoutes = require ('./routes/compra')

const app = express();

app.use(bodyParser.json());

app.use('/api/concesionarios', concesionarioRoutes);
app.use('/api/vehiculos', vehiculoRoutes);
app.use('/api/almacenes', almacenRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/insumos', insumoRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/detalleventa', detalleventaRoutes);
app.use('/api/compras', compraRoutes)

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
