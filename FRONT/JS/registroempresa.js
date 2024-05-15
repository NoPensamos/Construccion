<<<<<<< HEAD
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
    
    redirectToPrincipalPage();
    function redirectToPrincipalPage() {
        window.location.href = "../HTML/index 2.html";}
}

=======
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

>>>>>>> 86cfbaeeaf3e82fd3b382e940721c0b849cb9832
