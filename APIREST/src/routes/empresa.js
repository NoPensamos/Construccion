const express = require("express")
const router = express.Router()


const { Empresa, Producto} = require('../models/empresa');


router.post("/addempresa",async (req,res)=>{
    const empresa = Empresa(req.body)
    await empresa.save().then((respuesta)=>{
        res.json({status:res.statusCode,resp: respuesta})

    }).catch((e)=>{
        res.json({
            error: e
        })
    })
    console.log("Esperando")
})

router.get('/getempresa', async (req, res) => {
    try {
        const empresa = await Empresa.find({});
        console.log('holaaaaaaaaaa')
        res.status(200).send(empresa);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/getempresa/:id", async (req,res)=>{
    await Empresa.findById({"_id":req.params.id}).then((respuesta)=>{
        res.json(respuesta)
    }).catch((e)=>{
        res.json({
            error: e
        })
    })
})
/* router.delete("/deleteempresa/:id", async (req,res)=>{
    req.params.id
    await Empresa.findOneAndDelete({"_id":req.params.id}).then((respuesta)=>{
        res.json(respuesta)
    }).catch((e)=>{
        res.json({
            error: e
        })
    })
}) */


// Get Productos segun una empresa en especifico
router.get("/getproductos/:id", async (req, res) => {
    try {
        // Busca la empresa por su ID
        const empresa = await Empresa.findById(req.params.id);

        if (!empresa) {
            return res.status(404).json({ error: "Empresa no encontrada" });
        }

        // Encuentra todos los productos asociados a esa empresa
        const productos = await Producto.find({ empresa: req.params.id });

        res.json(productos);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});


 //agrega productos enlazado a una id de una empresa
router.post("/addproducto/:idEmpresa", async (req, res) => {
    try {
        // Verifica si la empresa existe
        const empresa = await Empresa.findById(req.params.idEmpresa);

        if (!empresa) {
            return res.status(404).json({ error: "Empresa no encontrada" });
        }

        // Crea un nuevo producto con los datos proporcionados en el cuerpo de la solicitud
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            unidades: req.body.unidades,
            empresa: req.params.idEmpresa // Asigna la empresa al producto
        });

        // Guarda el producto en la base de datos
        await nuevoProducto.save();

        res.status(201).json({ message: "Producto agregado correctamente", producto: nuevoProducto });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

//Muestra productos
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


/* async function insertProductWithReference(productName, price, companyId) {
    try {
        const producto = new Producto({
            nombre: productName,
            precio: price,
            empresa: companyId // Aquí asignas el ID de la empresa
        });
        await producto.save();
        console.log('Producto insertado correctamente..');
    } catch (error) {
        console.error('Error:', error);
    }
}



insertProductWithReference("hola", 100, "6627422f5c170bfad16ac2c8") */

/* router.put("/updateempresaByID",async (req,res)=>{
    
    empresaSchema.findOneAndUpdate({"_id":req.body.id},{"marca":req.body.nombre},{new:true}).then((respuesta)=>{
        res.json({status:res.statusCode,resp: respuesta})
    }).catch((e)=>{
        console.log(e)
    })
    
}) */

router.get("/login/:contra/:email", async (req,res)=>{
    const { contra, email } = req.params; // Destructura los parámetros de la solicitud

    try {
        // Busca el Empresa por su correo electrónico
        const empresa = await Empresa.findOne({ email });
        
        // Si no se encuentra el Empresa, devuelve un mensaje de error
        if (!empresa) {
            return res.status(404).json({ error: "Empresa no encontrado" });
        }
        
        // Compara la contraseña ingresada con la contraseña almacenada
        if (empresa.contraseña !== contra) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }
        
        // Si las credenciales son válidas, devuelve el Empresa
        res.json(empresa);
    } catch (error) {
        // Si ocurre algún error, devuelve un mensaje de error genérico
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});



module.exports = router