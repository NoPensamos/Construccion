<<<<<<< HEAD

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const usuarioSchema = new Schema(
    {
        nombre : {type: String, required: true},
        email: {type: String, required: true, unique: true},
        contraseña: {type: String, required: true},
        rol: {type: String}
    }
)
const usuario = mongoose.model("usuario",usuarioSchema)
=======

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const usuarioSchema = new Schema(
    {
        nombre : {type: String, required: true},
        email: {type: String, required: true, unique: true},
        contraseña: {type: String, required: true},
        rol: {type: String}
    }
)
const usuario = mongoose.model("usuario",usuarioSchema)

>>>>>>> 86cfbaeeaf3e82fd3b382e940721c0b849cb9832
module.exports = usuario