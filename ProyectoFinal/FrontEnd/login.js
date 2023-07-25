
const form = document.getElementById('login');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const correo = document.getElementById('correo').value;
    const contasena = document.getElementById('contrasena').value;


    fetch(`http://localhost:3000/login?correo=${correo}&contasena=${contasena}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {

                alert("No existes bro registrate o usuario / contraseña incorrecta");

            } else {


                const usuario = data[0];

                // Crear un objeto con los datos del usuario
                const datosUsuario = {
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    trn: usuario.trn
                };

                console.log(datosUsuario);

                const datosUsuarioJSON = JSON.stringify(datosUsuario);
                localStorage.setItem('usuario', datosUsuarioJSON);
                window.location.href = "Principal.html";

            }

        })
});
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

