const botonProducto = document.getElementById("botonProducto")
botonProducto.onclick = async () => {
    const nombre = document.getElementById("name").value;
    const precio = document.getElementById("description").value;
    const descripcion = document.getElementById("price").value;
    const unidades = document.getElementById("units").value;
    const imagen = document.getElementById("image_url").value;

    const usuario = {

        name : nombre,
        description: precio,
        price: descripcion,
        units : unidades,
        imageUrl: imagen,
    }
    try {
        const response = await axios.post('http://localhost:3000/api/productos/addproductos', usuario);
        console.log(response.data)
        alert('Producto registrado con éxito');
    } catch (error) {
        alert('Error al registrar el producto');
        console.error(error);
    }
    
}