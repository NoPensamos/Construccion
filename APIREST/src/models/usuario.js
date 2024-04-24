
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

module.exports = usuario