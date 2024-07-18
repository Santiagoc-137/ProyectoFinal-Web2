# Proyecto-Web2

## Descripción

Este proyecto tiene como objetivo desarrollar un sistema de información para un concesionario de automóviles que gestione la venta de vehículos e insumos. El sistema permitirá al concesionario vender vehículos y diversos insumos que pueden provenir de diferentes almacenes. Cada compra puede incluir varios insumos (aunque provengan de distintos almacenes) y múltiples vehículos. Los clientes y empleados están asociados al concesionario, y es necesario registrar todos los productos y sus precios actuales en cada compra.

## MER

![ProyectoFinal-Web2 MER drawio](https://github.com/user-attachments/assets/08164c21-8d4f-4488-b3c9-f9dfcdc68bb4)

## Tecnologías Utilizadas

- Node.js
- Express.js


## Estructura del Proyecto

concesionario/
│
│── Controllers/    # CRUD de cada categria
│    └──  almacenController.js
│    └──  clienteController.js
│    └──  compraController.js
│    └──  concesionarioController.js
│    └──  detalleVentaController.js
│    └──  empleadoController.js
│    └──  insumoController.js
│    └──  vehiculoController.js
│
├── data/           # Almacenamiento de datos
│   └──  almacenes.json
│   └──  clientes.json
│   └──  compras.json
│   └──  concesionarios.json
│   └──  detalles_ventas.json
│   └──  empleados.json
│   └──  insumos.json
│   └──  vehiculos.json
│
├── models/         # Modelado de datos
│   └──  almacen.js 
│   └──  cliente.js 
│   └──  compra.js 
│   └──  concesionario.js 
│   └──  detalleventa.js 
│   └──  empleados.js 
│   └──  insumos.js 
│   └──  vehiculos.js 
│ 
├── routes/         # Rutas especificas por categoria
│   └──  almacen.js  
│   └──  cliente.js  
│   └──  compra.js 
│   └──  concesionario.js 
│   └──  detalleventa.js     
│   └──  empleados.js
│   └──  insumos.js
│   └──  vehiculos.js
│
├── app.js           # Archivo principal del servidor
├── package.json     # Archivo de configuración del proyecto
└── README.md        # Archivo con la descripción del proyecto


## Instalación

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/Santiagoc-137/ProyectoFinal-Web2.git
    cd ProyectoFinal-Web2-main
    ```

2. Instalar las dependencias:
    ```bash
    npm install body-parser express
    ```

3. Iniciar el servidor:
    ```bash
    npm start
    ```

## Uso

El servidor ofrece varias rutas para gestionar los vehículos, insumos, clientes, empleados y ventas. Los datos se almacenan en el archivo `data/nombre.json`.

### Rutas Disponibles

### Almacén

- `GET /`: Obtiene todos los almacenes.
- `GET /:id`: Obtiene un almacén por su ID.
- `POST /`: Agrega un nuevo almacén.
- `PUT /:id`: Actualiza un almacén existente.
- `DELETE /:id`: Elimina un almacén.

### Cliente

- `GET /`: Obtiene todos los clientes.
- `GET /:id`: Obtiene un cliente por su ID.
- `POST /`: Agrega un nuevo cliente.
- `PUT /:id`: Actualiza un cliente existente.
- `DELETE /:id`: Elimina un cliente.

### Compra

- `GET /`: Obtiene todas las compras.
- `GET /:id`: Obtiene una compra por su ID.
- `POST /`: Registra una nueva compra.
- `PUT /:id`: Actualiza una compra existente.
- `DELETE /:id`: Elimina una compra.

### Concesionario

- `GET /`: Obtiene todos los concesionarios.
- `GET /:id`: Obtiene un concesionario por su ID.
- `POST /`: Agrega un nuevo concesionario.
- `PUT /:id`: Actualiza un concesionario existente.
- `DELETE /:id`: Elimina un concesionario.

### Detalle de Venta

- `GET /`: Obtiene todos los detalles de venta.
- `GET /:id`: Obtiene un detalle de venta por su ID.
- `POST /`: Agrega un nuevo detalle de venta.
- `PUT /:id`: Actualiza un detalle de venta existente.
- `DELETE /:id`: Elimina un detalle de venta.

### Empleados

- `GET /`: Obtiene todos los empleados.
- `GET /:id`: Obtiene un empleado por su ID.
- `POST /`: Agrega un nuevo empleado.
- `PUT /:id`: Actualiza un empleado existente.
- `DELETE /:id`: Elimina un empleado.

### Insumos

- `GET /`: Obtiene todos los insumos.
- `GET /:id`: Obtiene un insumo por su ID.
- `POST /`: Agrega un nuevo insumo.
- `PUT /:id`: Actualiza un insumo existente.
- `DELETE /:id`: Elimina un insumo.

### Vehículos

- `GET /`: Obtiene todos los vehículos.
- `GET /:id`: Obtiene un vehículo por su ID.
- `POST /`: Agrega un nuevo vehículo.
- `PUT /:id`: Actualiza un vehículo existente.
- `DELETE /:id`: Elimina un vehículo.


## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus mejoras y correcciones.

## Autor
Santiago Medina Varon 

codigo 29000
