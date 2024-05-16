const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    descripcion: {type:String},
    rol: { type: String },
    imageEmpresa : {
        type: String,
        required: true
    }
});

const ProductoSchema = new Schema({
    nombre: { type: String, required: true},
    precio: { type: Number },
    descripcion: {type: String},
    unidades: {type: Number},
    empresa: { type: Schema.Types.ObjectId, ref: 'Empresa' } // Referencia a la empresa
});

const Empresa = mongoose.model("Empresa", EmpresaSchema);
const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = { Empresa, Producto };
