
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
      localStorage.setItem('usuario', JSON.stringify(response.data));
      // Si la solicitud es exitosa, muestra un mensaje de éxito
      redirectToPrincipalPage();
  } catch (error) {
      // Si hay un error, muestra un mensaje de error
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  }
}

function redirectToPrincipalPage() {
  window.location.href = "../HTML/index 2.html";}
