async function crearUsuario(data) {
    
    await axios.post("http://localhost:3000/api/usuario/addusuario", data).
    then((respuesta) => {
    console.log(respuesta.data)
})
}

async function loginUsuario(data){
    await axios.get("http://localhost:3000/api/usuario/getusuarios", data).
    then((respuesta) => {
        console.log(respuesta.data)
    })
}