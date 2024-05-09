const botonLogin = document.getElementById("btn_login")
botonLogin.onclick = async (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    let endpoint = ""; // Inicializa la variable del punto final
    
    if (`http://localhost:3000/api/usuario/${email}`) {
      endpoint = `http://localhost:3000/api/usuario/login/${password}/${email}`;
    } else {
      endpoint = `http://localhost:3000/api/empresa/login/${password}/${email}`;
    }

    // Envía una solicitud GET al servidor para iniciar sesión
    const response = await axios.get(endpoint);

    console.log(response.data);

    // Si la solicitud es exitosa, muestra un mensaje de éxito
    redirectToPrincipalPage();
  } catch (error) {
    // Si hay un error, muestra un mensaje de error
    alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  }
}

function redirectToPrincipalPage() {
  window.location.href = "../HTML/index.html";
}