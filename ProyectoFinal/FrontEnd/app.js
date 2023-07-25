
(() => {

  fetch('http://localhost:3000/Principal')

    .then(response => response.json())
    .then(data => {
      const ruta_imagenes = "C:\imagenes_des9";
      const section = document.querySelector('.contComp'); // Cambio de getElementById a querySelector
      let trn = 0
      const listaproductos = document.createElement('div');
      listaproductos.setAttribute('class', 'list-group');
      section.appendChild(listaproductos);

      data.forEach(products => {
        const listItem = document.createElement('div');
        listItem.setAttribute('class', 'list-group-item');

        listItem.innerHTML = `  
          <a href="detalles.html?id=${products.id}&monto=${products.precio}">   <img class = 'list-group-image' src="${ruta_imagenes + products.imagen}" alt="${ruta_imagenes}" width="100" height="100"></a>
          <p>${products.producto}</p>
          <p>Precio: ${products.precio}</p>
          
        `;
        listaproductos.appendChild(listItem);
      });

      const datosUsuarioJSON = localStorage.getItem('usuario');
      const datosUsuario = JSON.parse(datosUsuarioJSON);

      if (datosUsuario !== null) {
        trn = datosUsuario.trn;
      }

      if (trn === 678) {
        document.getElementById('ingresar').style.display = "none";
        document.getElementById('registrar').style.display = "none";
      }

      if (trn === 123) {
        document.getElementById('ingresar').style.display = "none";
        document.getElementById('registrar').style.display = "none";
        document.getElementById('admin').style.display = "block";
      }
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
})();

// Función para limpiar el localStorage
function limpiarLocalStorage() {
  localStorage.clear();
  location.reload();
  console.log('LocalStorage limpiado');
}

// Ejecutar la función cada 3 minuto (180000 milisegundos)
setInterval(limpiarLocalStorage, 180000);
