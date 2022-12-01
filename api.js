var Db = require('./dboperation');
var User = require('./db/usuario');
const dboperation = require('./dboperation');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const {request, response} = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response, next) =>{
    console.log('middleware');
    next();
} )

router.route('/').get((request,response) => {
    response.send('API Taller Mecanico')
})


// LISTA DE USUARIOS
router.route('/user').get((request, response) => {
    dboperation.getUsuario().then(result => {
        response.json(result);
    })
})

// AÑADIR USUARIO
router.route('/user').post((request,response) =>{
    let user = {...request.body}

    dboperation.addUsuario(user).then(result =>{
        response.status(201).json(result);
    })
})

// LISTA DE ROL
router.route('/rol').get((request, response) => {
    dboperation.getRol().then(result => {
        response.json(result);
    })
})

// LISTA DE TALLERES
router.route('/taller').get((request, response) => {
    dboperation.getTaller().then(result =>{
        response.json(result);
    })
})

// AÑADIR TALLER
router.route('/taller').post((request,response) => {
    let taller = {...request.body}

    dboperation.addTaller(taller).then(result => {
        response.status(201).json(result);
    })
})

// BUSCAR TALLER ID
router.route('/taller/:id').get((request,response) =>{
    dboperation.findTallerbyId(request.params.id).then(result =>{
        response.json(result)
    })
})

// LISTA CLIENTE
router.route('/cliente').get((request,response) => {
    dboperation.getCliente().then(result => {
        response.json(result);
    })
})

// AÑADIR CLIENTE
router.route('/cliente').post((request,response) => {
    let cliente = {...request.body};

    dboperation.addCliente(cliente).then(result =>{
        response.status(201).json(result);
    })
})

// BUSQUEDA POR ID
router.route('/cliente/:id').get((request,response) =>{
    dboperation.findClienteById(request.params.id).then(result =>{
        response.json(result);
    })
})

// LISTA VEHICULOS 
router.route('/vehiculo').get((request,response) =>{
    dboperation.getVehiculo().then(result =>{
        response.json(result);
    })
})

// AÑADIR VEHICULO
router.route('/vehiculo').post((request,response) => {
    let vehiculo = {...request.body};

    dboperation.addVehiculo(vehiculo).then(result =>{
        response.status(201).json(result);
    })
})

// BUSCAR VEHICULO POR ID
router.route('/vehiculo/:id').get((request, response) => {
    dboperation.findVehiculoById(request.params.id).then(result =>{
        response.json(result)
    })
})

// BUSCAR VEHICULO POR ID
router.route('/vehiculo/cliente/:id').get((request, response) => {
    dboperation.findVehiculoByIdCliente(request.params.id).then(result =>{
        response.json(result)
    })
})

// LISTA SERVICIOS
router.route('/servicios').get((request,response) => {
    dboperation.getServicio().then(result => {
        response.json(result);
    })
})

// AÑADIR SERVICIO
router.route('/servicios').post((request,response) =>{
    let serv = {...request.body};

    dboperation.addServicio(serv).then(result =>{
        response.status(201).json(result);
    })
})

// BUSCAR SERVICIOS POR ID
router.route('/servicios/:id').get((request,response) => {
    dboperation.findServicioById(request.params.id).then(result => {
        response.json(result);
    })
})

// BUSCAR USUARIO POR ID
router.route('/user/:id').get((request,response) => {
    dboperation.findUsuarioById(request.params.id).then(result => {
        response.json(result);
    })
})

// LISTAR ORDENES DE TRABAJO
router.route('/ordenesTrabajo').get((request, response) => {
    dboperation.getOrdenes().then(result => {
        response.json(result);
    })
})

// BUSCAR ID DEL CLIENTE
router.route('/cliente/:nombreCliente/:apellidoCliente/:telefono/:dniCliente').get((request, response) => {
    dboperation.findClienteId(request.params.nombreCliente,
                              request.params.apellidoCliente,
                              request.params.telefono,
                              request.params.dniCliente).then(result=>{
                                response.json(result)
                              })
})

//  LISTAR MOTIVOS
router.route('/motivo').get((request, response) => {
    dboperation.getMotivo().then(result => {
        response.json(result)
    })
})

// AÑADIR MOTIVO
router.route('/motivo').post((request, response) =>{
    let motivo = {...request.body};

    dboperation.addMotivo(motivo).then(result =>{
        response.status(201).json(result)
    })
})

// BUSCAR MOTIVO POR ID
router.route('/motivo/:id').get((request, response) => {
    dboperation.findMotivoById(request.params.id).then( result => {
        response.json(result);
    })
})

// BUSCAR ID DE VEHICULO
router.route('/vehiculo/:placa/:marca/:modelo').get((request, response) => {
    dboperation.findVehiculoId(request.params.placa,
                               request.params.marca,
                               request.params.modelo).then(result => {
                                response.json(result)
                               })
})

// LISTAR DATOS DEL TALLER
router.route('/nroClientes').get((request,response) => {
    dboperation.getnumeroClientes().then(result => {
        response.json(result)
    })
})

// LISTAR MOTIVOS POR ID VEHICULO
router.route('/motivoVehiculo/:id').get((request,response) => {
    dboperation.getMotivosbyIdVehiculo(request.params.id).then( result => {
        response.json(result);
    })
})

// AÑADIR ORDEN
router.route('/ordenesTrabajo').post((request, response) => {
    let orden = {...request.body};

    dboperation.addOrden(orden).then(result => {
        response.status(201).json(result)
    })
})

// LISTAR ESTADO DE ORDEN TRABAJO BY IDORDEN
router.route('/ordenEstado/:id').get((request, response) => {
    dboperation.getOrdenEstadoByOrdenTrabajo(request.params.id).then(result=> {
        response.json(result);
    })
})

// LISTAR SERVICIOS DE ORDEN TRABAJO BY IDORDEN
router.route('/ordenServicio/:id').get((request, response) => {
    dboperation.getServiciosOrden(request.params.id).then(result =>{
        response.json(result)
    })
})

//TODO: LISTAR PRODUCTOS POR TALLER POR ID
router.route('/productosTaller').get((request,response) => {
    dboperation.getProductosPorTaller().then(result => {
        response.json(result)
    })
})

//LISTAR ORDENES POR IDVEHICULO
router.route('/ordenVehiculo/:id').get((request, response) => {
    dboperation.getOrdenesByVehiculo(request.params.id).then(result =>{
        response.json(result)
    })
})

// LISTAR ORDENES POR USUARIO
router.route('/ordenUsuario/:id').get((request, response) => {
    dboperation.getOrdenesByUsuario(request.params.id).then(result => {
        response.json(result)
    })
})

//  AÑADIR ORDEN ESTADO
router.route('/ordenEstado').post((request, response) => {
    let ordenEstado = {...request.body}

    dboperation.addOrdenEstado(ordenEstado).then(result =>{
        response.status(201).json(result)
    } )
})

// LISTAR VENTAS
router.route('/ventas').get((request,response) => {
    dboperation.getVentas().then(result => {
        response.json(result)
    })
})

//  AÑADIR ORDEN SERVICIO
router.route('/ordenServicio').post((request, response) => {
    let ordenServicio = {...request.body}

    dboperation.addOrdenServicio(ordenServicio).then(result =>{
        response.status(201).json(result)
    } )
})

//AÑADIR ORDEN PRODUCTO
router.route('/ordenProducto').post((request, response) => {
    let ordenProducto = {...request.body}

    dboperation.addOrdenProducto(ordenProducto).then(result =>{
        response.status(201).json(result)
    } )
})

//LISTAR ORDEN PRODUCTO BY IDORDEN
router.route('/ordenProducto/:id').get((request, response) => {
    dboperation.getProductosOrdenByOrdenTrabajo(request.params.id).then(result=> {
        response.json(result);
    })
})

router.route('/marca').get((request,response) => {
    dboperation.getMarca().then(result => {
        response.json(result)
    })
})

router.route('/marca').post((request, response) => {
    let marca = {...request.body}

    dboperation.addMarca(marca).then(result =>{
        response.status(201).json(result)
    } )
})

router.route('/categoria').get((request,response) => {
    dboperation.getCategoria().then(result => {
        response.json(result)
    })
})

router.route('/categoria').post((request, response) => {
    let categoria = {...request.body}

    dboperation.addCategoria(categoria).then(result =>{
        response.status(201).json(result)
    } )
})

// AÑADIR PRODUCTO
router.route('/producto').post((request, response) => {
    let producto = {...request.body};

    dboperation.addProducto(producto).then(result => {
        response.status(201).json(result)
    })
})

router.route('/dataTaller').get((request,response) => {
    dboperation.getDataDB().then(result => {
        response.json(result)
    })
})


var port = process.env.PORT || 8099;

app.listen(port, function() {
    console.log('Listening on port ' + port);
});