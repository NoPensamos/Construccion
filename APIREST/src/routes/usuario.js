
const express = require("express")
const router = express.Router()
const cookieParser = require("cookie-parser"); // Importa cookie-parser

const usuarioSchema = require("../models/usuario")

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


router.get("/login/:contra/:email", async (req,res)=>{
    const { contra, email } = req.params; // Destructura los parámetros de la solicitud

    try {
        // Busca el usuario por su correo electrónico
        const usuario = await usuarioSchema.findOne({ email });
        
        // Si no se encuentra el usuario, devuelve un mensaje de error
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        
        // Compara la contraseña ingresada con la contraseña almacenada
        if (usuario.contraseña !== contra) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }
        res.cookie('usuario_id', usuario._id, { maxAge: 86400000 }); // Cookie válida por 1 día (86400000 milisegundos)
        // Si las credenciales son válidas, devuelve el usuario
        res.json(usuario);
    } catch (error) {
        // Si ocurre algún error, devuelve un mensaje de error genérico
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
});


// Ruta para obtener los datos del usuario
router.get("/perfil", async (req, res) => {
    // Verifica si la cookie de sesión está presente
    if (req.cookies.usuario_id) {
        try {
            // Recupera el usuario utilizando el ID almacenado en la cookie
            const usuario = await usuarioSchema.findById(req.cookies.usuario_id);
            
            // Si el usuario existe, envía sus datos como respuesta
            if (usuario) {
                res.json(usuario);
            } else {
                // Si el usuario no existe, devuelve un mensaje de error
                res.status(404).json({ error: "Usuario no encontrado" });
            }
        } catch (error) {
            // Si hay algún error, devuelve un mensaje de error genérico
            console.error('Error al obtener los datos del usuario:', error);
            res.status(500).json({ error: "Error al obtener los datos del usuario" });
        }
    } else {
        // Si la cookie no está presente, devuelve un mensaje de error
        res.status(401).json({ error: "No se ha iniciado sesión" });
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