
const botonRegistro = document.getElementById("btn__registrado")
botonRegistro.onclick = async () => {
    const nombre = document.getElementById("register-fullname").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const usuario = {

        nombre : nombre,
        email: email,
        contraseña: password,
        rol : "Usuario"
    }
    await crearUsuario(usuario)
    redirectToPrincipalPage();
}

// Agrega un listener para el evento de clic en el botón "Regístrarse"
document.getElementById("btn__registrarse").addEventListener("click", function() {
    // Muestra el formulario de registro y oculta el formulario de inicio de sesión
    document.querySelector(".contenedor__login-register").classList.add("active-register");
});

// Animaciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPag);

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

function anchoPag() {
    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

// Obtener los elementos HTML necesarios para las animaciones
const formulario_login = document.querySelector(".formulario__login");
const formulario_register = document.querySelector(".formulario__register");
const contenedor_login_register = document.querySelector(".contenedor__login-register");
const caja_trasera_register = document.querySelector(".caja_trasera-register");
const caja_trasera_login = document.querySelector(".caja_trasera-login");


anchoPag();

