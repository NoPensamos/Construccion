<<<<<<< HEAD


const botonProducto = document.getElementById("btn_producto")
botonProducto.onclick = async()=>{
    const nombre = document.getElementById("nombre_producto").value;
    const precio = document.getElementById("precio_producto").value;
    const empresa = "6627422f5c170bfad16ac2c8";
    const descripcion = document.getElementById("descripcion_producto").value;

    const producto ={
        nombre : nombre,
        precio : precio,
        unidades: 40,
        descripcion: descripcion,
        imagen : imagen
    }
    console.log(empresa)
    await crearproducto(producto, empresa)
   
=======


const botonProducto = document.getElementById("btn_producto")
botonProducto.onclick = async()=>{
    const nombre = document.getElementById("nombre_producto").value;
    const precio = document.getElementById("precio_producto").value;
    const empresa = "6627422f5c170bfad16ac2c8";
    const descripcion = document.getElementById("descripcion_producto").value;

    const producto ={
        nombre : nombre,
        precio : precio,
        unidades: 40,
        descripcion: descripcion,
        imagen : imagen
    }
    console.log(empresa)
    await crearproducto(producto, empresa)
   
>>>>>>> 86cfbaeeaf3e82fd3b382e940721c0b849cb9832
}