

async function crearEmpresa(data) {
    await axios.post("http://localhost:3000/api/empresa/addempresa", data).
    then((respuesta) => {

})
}

async function crearproducto(data, empresa) {
    try {
        const url = `http://localhost:3000/api/empresa/addproducto/${empresa}`;
        const respuesta = await axios.post(url, data);
        // Manejar la respuesta aquí
        console.log(respuesta.data);
    } catch (error) {
        // Manejar los errores aquí
        console.error("Error al crear el producto:", error);
    }
}

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

