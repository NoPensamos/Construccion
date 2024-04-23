async function crearUsuario(data) {
    
    await axios.post("http://localhost:3000/api/usuario/addusuario", data).
    then((respuesta) => {
    console.log(respuesta.data)
})
}