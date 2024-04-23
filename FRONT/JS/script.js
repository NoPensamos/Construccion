// Clase Login para manejar las operaciones de inicio de sesión y registro
class Login {
    constructor() {
        this.auth = firebase.auth();
    }

    // Método para registrar un nuevo usuario
    signUp(email, password) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Registro exitoso, puedes redirigir a la página principal o realizar otras acciones
                console.log("Registro exitoso");
                redirectToPrincipalPage();
            })
            .catch((error) => {
                // Ha ocurrido un error durante el registro
                console.log(error);
                alert("Ha ocurrido un error durante el registro");
            });
    }

    // Método para iniciar sesión con un usuario existente
    signIn(email, password) {
        this.auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Inicio de sesión exitoso, puedes redirigir a la página principal o realizar otras acciones
                console.log("Inicio de sesión exitoso");
                redirectToPrincipalPage();
            })
            .catch((error) => {
                // Ha ocurrido un error durante el inicio de sesión
                console.log(error);
                alert("Ha ocurrido un error durante el inicio de sesión");
            });
    }
}

// Función para redirigir a la página principal después del inicio de sesión o registro exitoso
function redirectToPrincipalPage() {
    window.location.href = "../HTML/index.html";
}

// Configura tu aplicación de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBCO6FN2GvYXNjCxXAbs5ayT_QA-PV0J4g",
    authDomain: "nopensamos-27b75.firebaseapp.com",
    projectId: "nopensamos-27b75",
    storageBucket: "nopensamos-27b75.appspot.com",
    messagingSenderId: "133968142069",
    appId: "1:133968142069:web:a10a25ac184161efb6efbc",
    measurementId: "G-5BFTKN8PSW"
};

// Inicializa la aplicación de Firebase
firebase.initializeApp(firebaseConfig);

// Inicializa el objeto de inicio de sesión
const login = new Login();

// Agrega un listener para el evento "submit" del formulario de registro
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    login.signUp(email, password); // Llama al método de registro en el objeto Login
});

// Importamos la función crearUsuario desde api.js
import { crearUsuario } from "../JS/api.js";

// Agregamos un listener para el evento "submit" del formulario de registro
document.getElementById("register-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evitamos el envío del formulario

    // Recolectamos los valores del formulario
    const fullName = document.getElementById("register-fullname").value;
    const email = document.getElementById("register-email").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Creamos un objeto con los datos del nuevo usuario
    const newUser = {
        nombre: fullName,
        email: email,
        contraseña: password,
        role: "Usuario" // Por ejemplo, asignamos un rol predeterminado
    };

    try {
        // Enviamos los datos del nuevo usuario a MongoDB
        await crearUsuario(newUser);
        console.log("Usuario registrado correctamente en MongoDB.");
        // Aquí podrías redirigir a la página principal u otra acción después de registrar al usuario
    } catch (error) {
        console.error("Error al registrar usuario en MongoDB:", error);
        // Aquí podrías mostrar un mensaje de error al usuario si la operación falla
    }
});

// Agrega un listener para el evento "submit" del formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    login.signIn(email, password); // Llama al método de inicio de sesión en el objeto Login
});


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