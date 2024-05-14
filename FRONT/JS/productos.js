// productos.js

const express = require('express');
const router = express.Router();
const Producto = require('./models/empresa'); // Asegúrate de tener correctamente definido tu modelo Producto

router.get("/getproductos", async (req, res) => {
    try {
        // Busca todos los productos
        const productos = await Producto.find();

        res.json(productos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

module.exports = router;
