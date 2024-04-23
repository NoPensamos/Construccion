const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
    nombre: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    rol: { type: String }
});

const ProductoSchema = new Schema({
    nombre: { type: String },
    precio: { type: Number },
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' } // Referencia a la empresa
});

const Empresa = mongoose.model("Empresa", EmpresaSchema);
const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = { Empresa, Producto };
