const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) throw new Error("El precio debe ser un valor positivo.");
        }
    },
    units: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) throw new Error("Las unidades deben ser un valor positivo.");
        }
    },
    imageUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const productos = mongoose.model('productos', productosSchema);

module.exports = productos;
