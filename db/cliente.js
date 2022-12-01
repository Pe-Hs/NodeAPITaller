class Cliente{
    constructor(idCliente, nombreCliente, apellidoCliente, email, telefono, dni){
        this.idCliente = idCliente;
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.email = email;
        this.telefono = telefono;
        this.dni;
    }
}

module.exports = Cliente;