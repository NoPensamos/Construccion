const express = require('express');
const router = express.Router();
const productos = require('../models/productos'); // Ajusta la ruta según tu estructura de archivos

// Crear un nuevo productoso
router.post('/addproductos', async (req, res) => {
    try {
        const producto = new productos(req.body);
        await producto.save();
        res.status(201).send(producto);
        console.log(productos);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
});

// Obtener todos los productos
router.get('/getproductos', async (req, res) => {
    try {
        const productoss = await productos.find({});
        res.status(200).send(productoss);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obtener un productoso por ID
router.get('/productos/:id', async (req, res) => {
    try {
        const productos = await productos.findById(req.params.id);
        if (!productos) {
            return res.status(404).send();
        }
        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un productoso por ID
router.patch('/productos/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'price', 'units', 'imageUrl'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Actualización no permitida' });
    }

    try {
        const productos = await productos.findById(req.params.id);
        if (!productos) {
            return res.status(404).send();
        }

        updates.forEach(update => productos[update] = req.body[update]);
        await productos.save();
        res.status(200).send(productos);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un productoso por ID
router.delete('/productos/:id', async (req, res) => {
    try {
        const productos = await productos.findByIdAndDelete(req.params.id);
        if (!productos) {
            return res.status(404).send();
        }
        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
