var config = require('./dbconfig');
const sql = require('mssql');


async function getUsuario(){
    try{
        let pool = await sql.connect(config);
        let users = await pool.request().execute('listarUsuarios');
        return users.recordset;
    }catch(error){
        console.log(error);
    }
}

async function getUsuarioDetalles(){
    try{
        let pool = await sql.connect(config);
        let users = await pool.request().execute('listarUsuariosDetalles');
        return users.recordset;
    }catch(error){
        console.log(error);
    }
}

async function addUsuario(user){
    try{
        let pool = await sql.connect(config);
        let insertUsuario = await pool.request()
            .input('nombreUsuario', sql.NChar, user.nombreUsuario)
            .input('apellidoUsuario', sql.NChar, user.apellidoUsuario)
            .input('email', sql.NChar, user.email)
            .input('telefono', sql.NChar, user.telefono)
            .input('dniUsuario', sql.NChar, user.dniUsuario)
            .input('domicilio', sql.NVarChar, user.domicilio)
            .input('idRol', sql.Int, user.idRol)
            .input('idTaller', sql.Int, user.idTaller)
            .input('usuario', sql.NVarChar, user.usuario)
            .input('password', sql.NVarChar, user.contraseña)
            .execute('InsertUsers');
        return insertUsuario.recordset;
    }catch(error){
        console.log(error);
    }
}

async function getRol(){
    try{
        let pool = await sql.connect(config);
        let rol = await pool.request().query("SELECT * FROM ROL");
        return rol.recordset;
    }catch(err){
        console.log(err);
    }
}

async function getTaller(){
    try {
        let pool = await sql.connect(config);
        let taller = await pool.request().query("SELECT * FROM TALLER");
        return taller.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function addTaller(taller){
    try {
        let pool = await sql.connect(config);
        let inserTaller = await pool.request()
        .input('nombreTaller', sql.NVarChar, taller.nombreTaller)
        .input('direccion', sql.NVarChar, taller.direccion)
        .input('distrito', sql.NVarChar, taller.distrito)
        .input('capacidadMax', sql.Int, taller.capacidadMax)
        .input('ruc', sql.NVarChar, taller.ruc)
        .execute('insertTaller');
        return inserTaller.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function findTallerbyId(idTaller){
try {
    let pool = await sql.connect(config);
    let taller = await  pool.request()
    .input('input_parameter', sql.Int, idTaller)
    .query('SELECT * FROM TALLER WHERE idTaller = @input_parameter')
    return taller.recordset;
} catch (error) {
    console.log(error)
}
}

async function getCliente() {
    try {
        let pool = await sql.connect(config);
        let cliente = await pool.request().execute('listarClientes')
        return cliente.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function addCliente(cliente){
    try {
        let pool = await sql.connect(config);
        let insertCliente = await pool.request()
        .input('nombreCliente', sql.NVarChar, cliente.nombreCliente)
        .input('apellidoCliente', sql.NVarChar, cliente.apellidoCliente)
        .input('email', sql.NVarChar, cliente.email)
        .input('telefono', sql.NVarChar, cliente.telefono)
        .input('dniCliente', sql.NVarChar, cliente.dniCliente)
        .execute('insertCliente');
        return insertCliente.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function getVehiculo(){
    try {
        let pool = await sql.connect(config);
        let vehiculo = await pool.request().query('SELECT * FROM VEHICULO v ORDER BY v.idVehiculo DESC ');
        return vehiculo.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function addVehiculo(vehiculo) {
    try {
        let pool = await sql.connect(config);
        let insertVehiculo = await pool.request()
        .input('marca', sql.NVarChar, vehiculo.marca)
        .input('modelo', sql.NVarChar, vehiculo.modelo)
        .input('placa', sql.NVarChar, vehiculo.placa)
        .input('nroChasis', sql.NVarChar, vehiculo.nroChasis)
        .input('idCliente', sql.BigInt, vehiculo.idCliente)
        .input('color', sql.NVarChar, vehiculo.color)
        .execute('insertVehiculo');
        return insertVehiculo.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function findVehiculoById(idVehiculo){
    try {
        let pool = await sql.connect(config);
        let vehiculo = await pool.request()
        .input('input_parameter', sql.BigInt, idVehiculo)
        .query('SELECT * FROM VEHICULO WHERE idVehiculo = @input_parameter')
        return vehiculo.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function findVehiculoByIdCliente(idCliente){
    try {
        let pool = await sql.connect(config);
        let vehiculo = await pool.request()
        .input('idCliente', sql.BigInt, idCliente)
        .execute('listarVehiculosIdCliente')
        return vehiculo.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getServicio(){
    try {
        let pool = await sql.connect(config);
        let serv = await pool.request().query('SELECT * FROM SERVICIOS');
        return serv.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function addServicio(serv){
    try {
        let pool = await sql.connect(config);
        let insertServ = await pool.request()
            .input('nombreServicio', sql.NVarChar, serv.nombreServicio)
            .input('costo', sql.Decimal, serv.costo)
            .input('descripcion', sql.NVarChar, serv.descripcion)
            .execute('insertServicio');
            return insertServ.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function findUsuarioById(idUser){
    try {
        let pool = await sql.connect(config);
        let user = await pool.request()
        .input('input_parameter', sql.Int, idUser)
        .query('SELECT * FROM USUARIO WHERE idUsuario = @input_parameter')
        return user.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getOrdenes(){
    try {
        let pool = await sql.connect(config);
        let orden = await pool.request().execute('listarOrdenes');
        return orden.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function addOrden(orden){
    try {
        let pool = await sql.connect(config);
        let insertOrden = await pool.request()
            .input('idCliente', sql.BigInt, orden.idCliente)
            .input('idTaller', sql.Int, orden.idTaller)
            .input('idUsuario', sql.BigInt, orden.idUsuario)
            .input('idVehiculo', sql.BigInt, orden.idVehiculo)
            .input('motivo', sql.NVarChar, orden.motivo)
            .input('fecha', sql.SmallDateTime, orden.fecha)
            .execute('insertOrden')
            return insertOrden.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function findClienteById(idCliente){
    try {
        let pool = await sql.connect(config);
        let cliente = await pool.request()
            .input('input_parameter', sql.BigInt, idCliente)
            .query('SELECT * FROM CLIENTE WHERE idCliente = @input_parameter')
            return cliente.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function findServicioById(idServicio){
    try {
        let pool = await sql.connect(config);
        let servicio = await pool.request()
            .input('input_parameter', sql.Int , idServicio)
            .query('SELECT * FROM SERVICIOS WHERE idServicio = @input_parameter')
            return servicio.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function findClienteId(nombreCliente, apellidoCliente, telefono, dni){
    try {
        let pool = await sql.connect(config);
        let cliente = await pool.request()
            .input('nombreCliente',sql.NVarChar,nombreCliente)
            .input('apellidoCliente',sql.NVarChar,apellidoCliente)
            .input('telefono',sql.NVarChar,telefono)
            .input('dniCliente',sql.NVarChar,dni)
            .execute('buscarIdCliente')
            return cliente.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function findVehiculoId(placa, marca, modelo){
    try {
        let pool = await sql.connect(config);
        let vehiculo = await pool.request()
            .input('placa', sql.NVarChar, placa)
            .input('marca', sql.NVarChar, marca)
            .input('modelo', sql.NVarChar, modelo)
            .execute('buscarIdVehiculo')
            return vehiculo.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function addMotivo(motivo){
    try {
        let pool = await sql.connect(config);
        let insertmotivo = await pool.request()
        .input('descripcion', sql.NVarChar, motivo.descripcion )
        .input('idVehiculo', sql.BigInt, motivo.idVehiculo )
        .input('fecha', sql.SmallDateTime, motivo.fecha )
        .execute('insertarMotivo')
        return insertmotivo.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getMotivo(){
    try {
        let pool = await sql.connect(config)
        let motivo = await pool.request()
            .query('SELECT * FROM MOTIVO');
        return motivo.recordset;

    } catch (error) {
        console.log(error)
    }
}

async function findMotivoById(idMotivo){
try {
    let pool = await sql.connect(config);
    let findMotivo = await pool.request()
    .input('input_parameter', sql.BigInt, idMotivo )
        .query('SELECT * FROM MOTIVO WHERE idMotivo = @input_parameter')
        return findMotivo.recordset;
} catch (error) {
    console.log(error)
}
}

async function getnumeroClientes(){
    try {
        let pool = await sql.connect(config)
        let nroClientes = await pool.request().execute('numeroClientesRegistrados')
            
        return nroClientes.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getMotivosbyIdVehiculo(idVehiculo){
    try {
        let pool = await sql.connect(config);
        let motivoVehiculo = await pool.request()
            .input('idVehiculo', sql.BigInt, idVehiculo )
            .execute('listarMotivoVehiculo')
            return motivoVehiculo.recordset
    } catch (error) {
        console.log(error)
    }
}

async function getOrdenEstadoByOrdenTrabajo(idOrdenTrabajo){
    try {
        let pool = await sql.connect(config);
        let ordenEstado = await pool.request()
        .input('idOrdenTrabajo', sql.BigInt, idOrdenTrabajo )
        .execute('listarEstadoOrdenTrabajo')
        return ordenEstado.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getServiciosOrden(idOrdenTrabajo){
    try {
        let pool = await sql.connect(config);
        let servicioOrden = await pool.request()
        .input('idOrdenTrabajo', sql.BigInt, idOrdenTrabajo)
        .execute('listarServiciosOrden')
        return servicioOrden.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getProductosPorTaller(){
    try {
        let pool = await sql.connect(config);
        let productosTaller = await pool.request()
        .execute('listarProductosPorTaller');
        return productosTaller.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getOrdenesByVehiculo(idVehiculo){
    try {
        let pool = await sql.connect(config);
        let ordenesVehiculo = await pool.request()
        .input('idVehiculo', sql.BigInt, idVehiculo)
        .execute('listarOrdenesVehiculos')
        return ordenesVehiculo.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getOrdenesByUsuario(idUsuario){
    try {
        let pool = await sql.connect(config)
        let ordenesUsuario = await pool.request()
        .input('idUsuario', sql.BigInt, idUsuario)
        .execute('listarOrdenesUsuario')
    } catch (error) {
        console.log(error)
    }
}

async function addOrdenEstado(ordenEstado){
    try {
        let pool = await sql.connect(config);
        let insertOrdenEstado = await pool.request()
        .input('idOrdenTrabajo', sql.BigInt, ordenEstado.idOrdenTrabajo)
        .input('idEstadoOrden', sql.Int, ordenEstado.idEstadoOrden)
        .input('fecha', sql.SmallDateTime, ordenEstado.fecha)
        .input('hora', sql.Time, ordenEstado.hora)
        .input('diagnostico', sql.NVarChar, ordenEstado.diagnostico)
        .execute('insertOrdenEstado')
        return insertOrdenEstado.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function addOrdenServicio(ordenServicio){
    try {
        let pool = await sql.connect(config);
        let insertOrdenServicio = await pool.request()
        .input('idOrdenTrabajo', sql.BigInt, ordenServicio.idOrdenTrabajo)
        .input('idServicio', sql.Int, ordenServicio.idServicio)
        .input('fecha', sql.BigInt, sql.SmallDateTime.fecha)
        .execute('insertOrdenServicio')
        return insertOrdenServicio.recordset
    } catch (error) {
        console.log(error)
    }
}

async function getVentas(){
    try {
        let pool = await sql.connect(config)
        let ventas = await pool.request()
        .execute('listarVentas')
        return ventas.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function addOrdenProducto(ordenProducto){
    try{
        let pool = await sql.connect(config);
        let insertOrdenProducto = await pool.request()
        .input('idOrdenTrabajo', sql.BigInt, ordenProducto.idOrdenTrabajo)
        .input('idProducto', sql.Int, ordenProducto.idProducto)
        .input('cantidad', sql.Int, ordenProducto.cantidad)
        .execute('insertOrdenProducto')
    }catch(error){
        console.log(error)
    }
}

async function getProductosOrdenByOrdenTrabajo(idOrdenTrabajo){
    try {
        let pool = await sql.connect(config);
        let servicioOrden = await pool.request()
        .input('idOrdenTrabajo', sql.BigInt, idOrdenTrabajo)
        .execute('listarProductosOrden')
        return servicioOrden.recordset;
    } catch (error) {
        console.log(error)
    }
}

async function getMarca(){
    try {
        let pool = await sql.connect(config)
        let marca = await pool.request()
        .execute('listarMarca')
        return marca.recordset
    } catch (error) {
        console.log(error)        
    }
}

async function addMarca(marca){
    try {
        let pool = await sql.connect(config)
        let insertMarca = await pool.request()
        .input('nombreMarca', sql.NVarChar, marca.nombreMarca)
        .input('descripMarca', sql.NVarChar, marca.nombreMarca)
        .execute('insertMarca')
        return insertMarca.recordset
    } catch (error) {
        console.log(error)        
    }
}

async function getCategoria(){
    try {
        let pool = await sql.connect(config)
        let categoria = await pool.request()
        .execute('listarCategoria')
        return categoria.recordset
    } catch (error) {
        console.log(error)        
    }
}

async function addCategoria(categoria){
    try {
        let pool = await sql.connect(config)
        let insertCategoria = await pool.request()
        .input('nombreCategoria', sql.NVarChar, categoria.nombreCategoria)
        .input('descripCategoria', sql.NVarChar, categoria.descripCategoria)
        .execute('insertCategoria')
        return insertCategoria.recordset
    } catch (error) {
        console.log(error)        
    }
}

async function addProducto(producto){
    try {
        let pool = await sql.connect(config)
        let insertProducto = await pool.request()
        .input('codigoProducto', sql.NVarChar, producto.codigoProducto)
        .input('descripcion', sql.NVarChar, producto.descripcion)
        .input('costo', sql.Decimal, producto.costo)
        .input('stock', sql.Decimal, producto.stock)
        .input('idMarca', sql.Int, producto.idMarca)
        .input('idTaller', sql.Int, producto.idTaller)
        .input('idCategoria', sql.Int, producto.idCategoria)
        .input('condicion', sql.NVarChar, producto.condicion)
        .input('venta', sql.Decimal, producto.venta)
        .execute('insertProducto')
        return insertProducto.recordset
    } catch (error) {
        console.log(error)        
    }
}

async function getDataDB(){
    try {
        let pool = await sql.connect(config);
        let db = await pool.request().execute('dataTaller')
        return db.recordset
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addCategoria : addCategoria,
    addCliente : addCliente,
    addMarca : addMarca,
    addMotivo: addMotivo,
    addOrden : addOrden,
    addOrdenEstado: addOrdenEstado,
    addOrdenProducto : addOrdenProducto,
    addOrdenServicio : addOrdenServicio,
    addProducto: addProducto,
    addServicio : addServicio,
    addTaller : addTaller,
    addUsuario : addUsuario,
    addVehiculo : addVehiculo,
    findClienteById : findClienteById,
    findClienteId : findClienteId,
    findMotivoById : findMotivoById,
    findServicioById: findServicioById,
    findTallerbyId: findTallerbyId,
    findUsuarioById : findUsuarioById,
    findVehiculoById: findVehiculoById,
    findVehiculoByIdCliente: findVehiculoByIdCliente,
    findVehiculoId: findVehiculoId,
    getCategoria : getCategoria,
    getCliente : getCliente,
    getMarca : getMarca,
    getMotivo : getMotivo,
    getMotivosbyIdVehiculo : getMotivosbyIdVehiculo,
    getnumeroClientes :getnumeroClientes,
    getOrdenes : getOrdenes,
    getOrdenesByUsuario : getOrdenesByUsuario,
    getOrdenesByVehiculo : getOrdenesByVehiculo,
    getOrdenEstadoByOrdenTrabajo: getOrdenEstadoByOrdenTrabajo,
    getProductosOrdenByOrdenTrabajo : getProductosOrdenByOrdenTrabajo,
    getProductosPorTaller : getProductosPorTaller,
    getRol : getRol,
    getServicio : getServicio,
    getServiciosOrden : getServiciosOrden,
    getTaller : getTaller,
    getUsuario : getUsuario,
    getUsuarioDetalles: getUsuarioDetalles,
    getVehiculo : getVehiculo,
    getVentas :getVentas ,
    getDataDB: getDataDB,
}