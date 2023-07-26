const form = document.getElementById('register');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const dni = document.getElementById('ID').value;
    const password = document.getElementById('password').value;
   

    fetch(`http://localhost:3000/register?nombre=${nombre}&apellido=${apellido}&email=${email}&dni=${dni}&password=${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                alert("Registro fallido");
            } else {

                const usuario = data[0];

                // Crear un objeto con los datos del usuario
                const datosUsuario = {
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    trn: usuario.trn
                };

                const datosUsuarioJSON = JSON.stringify(datosUsuario);
                alert("Registro exitoso");
                localStorage.setItem('usuario', datosUsuarioJSON);
                window.location.href = "Principal.html";
            }
        })
});

