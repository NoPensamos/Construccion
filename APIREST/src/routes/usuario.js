const express = require("express")
const router = express.Router()

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

/* router.put("/updateusuarioByID",async (req,res)=>{
    
    usuarioSchema.findOneAndUpdate({"_id":req.body.id},{"marca":req.body.nombre},{new:true}).then((respuesta)=>{
        res.json({status:res.statusCode,resp: respuesta})
    }).catch((e)=>{
        console.log(e)
    })
    
}) */


module.exports = router