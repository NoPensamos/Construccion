<<<<<<< HEAD

const botonLogin = document.getElementById("btn_login")
localStorage.clear();
botonLogin.onclick = async () => {
  event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      // Envía una solicitud POST al servidor para iniciar sesión
      const response = await axios.get(`http://localhost:3000/api/usuario/login/${password}/${email}`);
      console.log(response.data)
      localStorage.setItem('usuario', JSON.stringify(response.data.data));
      // Si la solicitud es exitosa, muestra un mensaje de éxito
      redirectToPrincipalPage();
  } catch (error) {
      // Si hay un error, muestra un mensaje de error
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  }
}

function redirectToPrincipalPage() {
  window.location.href = "../HTML/index 2.html";}
=======
const botonLogin = document.getElementById("btn_login")
botonLogin.onclick = async () => {
  event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      // Envía una solicitud POST al servidor para iniciar sesión
      const response = await axios.get(`http://localhost:3000/api/usuario/login/${password}/${email}`);
      console.log(response.data)
      // Si la solicitud es exitosa, muestra un mensaje de éxito
      redirectToPrincipalPage();
  } catch (error) {
      // Si hay un error, muestra un mensaje de error
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  }
}

function redirectToPrincipalPage() {
  window.location.href = "../HTML/index2.html";
}
>>>>>>> 86cfbaeeaf3e82fd3b382e940721c0b849cb9832
