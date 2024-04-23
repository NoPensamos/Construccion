const formRegister = document.querySelector(".form-register");
const inputUser = document.querySelector('.form-register input[type="text"]');
const inputPass = document.querySelector('.form-register input[type="password"]');
const inputEmail = document.querySelector('.form-register input[type="email"]');
const alertaError = document.querySelector(".form-register .alerta-error");
const alertaExito = document.querySelector(".form-register .alerta-exito");

const nombreUsuario = /^[a-zA-Z0-9]{4,16}$/;
const registroEmail = /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const registroContraseña = /^.{8,16}$/;

const estadoValidacionCampos = {
  userName: false,
  userEmail: false,
  userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarFormulario();
  });

  inputUser.addEventListener("input", () => {
    validarCampo(nombreUsuario,inputUser,"El usuario tiene que ser de 4 a 16 dígitos y solo puede contener letras.");
  });

  inputEmail.addEventListener("input", () => {
    validarCampo(registroEmail,inputEmail,"El correo solo puede contener letras, números, puntos y guíon bajo.");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(registroContraseña,inputPass,"La contraseña tiene que ser de 8 a 16 dígitos");
  });
});

function validarCampo(regularExpresion, campo, mensaje) {
  const validarCampo= regularExpresion.test(campo.value);
  if (validarCampo) {
    eliminarAlerta(campo.parentElement.parentElement);
    estadoValidacionCampos[campo.name] = true;
    campo.parentElement.classList.remove("error");
    return;
  }
  estadoValidacionCampos[campo.name] = false;
  campo.parentElement.classList.add("error");
  mostrarAlerta(campo.parentElement.parentElement,mensaje);
}

function mostrarAlerta(referencia,mensaje) {
  eliminarAlerta(referencia);
  const alertaDiv = document.createElement("div");
  alertaDiv.classList.add("alerta");
  alertaDiv.textContent = mensaje;
  referencia.appendChild(alertaDiv);
}

function eliminarAlerta(referencia) {
  const alerta = referencia.querySelector(".alerta");

  if (alerta) alerta.remove();
}

function enviarFormulario() {


  if (estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {

    estadoValidacionCampos.userName = false;
    estadoValidacionCampos.userEmail = false;
    estadoValidacionCampos.userPassword = false;

    formRegister.reset();
    alertaExito.classList.add("alertaExito");
    alertaError.classList.remove("alertaError");
    setTimeout(() => {
      alertaExito.classList.remove("alertaExito");
    }, 3000); 
    return;
  }
  
  alertaExito.classList.remove("alertaExito");
  alertaError.classList.add("alertaError");
  setTimeout(() => {
    alertaError.classList.remove("alertaError");
  }, 3000);
}