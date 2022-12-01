class Usuario{
    constructor(idUsuario, nombreUsuario, apellidoUsuario,email,telefono,dni,domicilio,idRol, idTaller, usuario, contraseña){
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.email = email;
        this.telefono = telefono;
        this.dni = dni;
        this.domicilio = domicilio;
        this.idRol = idRol;
        this.idTaller = idTaller;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

module.exports = Usuario;