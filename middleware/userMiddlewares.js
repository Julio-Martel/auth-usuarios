const usuarios = require('../database/usuarios');

const verificarUsPass = (req, res, next) => {
    const usuario = req.body.usuario;
    const password = req.body.password;

    const usuarioExistente = usuarios.find(u => u.usuario === usuario && u.password === password);

    if(!usuarioExistente){
        return res.status(401).json({
           mensaje: 'el usuario o contraseña es incorrecto',
           
        })
    }

    next();
}

module.exports = verificarUsPass;