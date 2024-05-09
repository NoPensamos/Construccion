
const express = require("express")
const router = express.Router()

const usuarioSchema = require("../models/usuario");
const  {Empresa} = require('../models/empresa');


router.post("/addusuario",async (req,res)=>{
    const usuario = usuarioSchema(req.body)
    await usuario.save().then((respuesta)=>{
        res.json({status:res.statusCode,resp: respuesta})
    }).catch((e)=>{
        res.json({
            error: e
        })
    })
    console.log("Esperando")
})
router.get("/getusuarios",async (req,res)=>{
    await usuarioSchema.find().then((respuesta)=>{
        console.log(respuesta[0].email)
        res.json(respuesta)
    }).catch((e)=>{
        res.json({
            error: e
        })
    })
})

router.get("/getusuario/:id", async (req,res)=>{
    await usuarioSchema.findById({"_id":req.params.id}).then((respuesta)=>{
        res.json(respuesta)
    }).catch((e)=>{
        res.json({
            error: e
        })
    })
})
router.delete("/deleteusuario/:id", async (req,res)=>{
    req.params.id
    await usuarioSchema.findOneAndDelete({"_id":req.params.id}).then((respuesta)=>{
        res.json(respuesta)
    }).catch((e)=>{
        res.json({
            error: e
        })
    })
})



//validar Email
router.get("/Validaremail/:email", async(req,res)=>{
    const email = req.params.email;
    console.log("entre")
    try{
        const usuario = await usuarioSchema.findOne({ email });
        const empresa = await Empresa.findOne({ email });
    console.log(usuario,empresa)
    }
    
    catch(error){
            console.log(error)
    }
});

router.get("/login/:contra/:email", async (req,res)=>{
    const { contra, email } = req.params; // Destructura los parámetros de la solicitud

    try {
        // Busca el usuario por su correo electrónico
        const usuario = await usuarioSchema.findOne({ email });
        
        // Si no se encuentra el usuario, devuelve un mensaje de error
        if (!usuario) {

            return res.status(400).json({ error: "Usuario no encontrado" });


        }
        
        // Compara la contraseña ingresada con la contraseña almacenada
        if (usuario.contraseña !== contra) {

            return res.status(400).json({ error: "Credenciales inválidas" });


        }
        
        // Si las credenciales son válidas, devuelve el usuario
        res.json(usuario);

        return res.status(200).json({status: true, mensaje: "Credenciales", data:{}})

    } catch (error) {
        // Si ocurre algún error, devuelve un mensaje de error genérico
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }

});

/* router.put("/updateusuarioByID",async (req,res)=>{
    
    usuarioSchema.findOneAndUpdate({"_id":req.body.id},{"marca":req.body.nombre},{new:true}).then((respuesta)=>{
        res.json({status:res.statusCode,resp: respuesta})
    }).catch((e)=>{
        console.log(e)
    })
    
}) */


module.exports = router