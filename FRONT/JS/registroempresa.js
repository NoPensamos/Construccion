//Regitroooo----------------------------------------------------------

const botonRegistro = document.getElementById("Registrarse")

botonRegistro.onclick = async () => {
    console.log("click")
    const nombre = document.getElementById("register-nombre").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const descripcion = document.getElementById("register-des").value;

    const Empresa = {

        nombre : nombre,
        email: email,
        contraseña: password,
        descripcion: descripcion,
        rol : "Empresa"
    }
 
    await crearEmpresa(Empresa)
}

