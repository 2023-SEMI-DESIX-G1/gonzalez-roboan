const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let monto1 = 0;
fetch(`http://localhost:3000/detalles?id=${id}`)
    .then(response => response.json())
    .then(data => {


        const ruta_imagenes = "C:\imagenes_des9";
        const section = document.querySelector('.contCompDet'); // Cambio de getElementById a querySelector
        const listaproductos = document.createElement('div');
        section.appendChild(listaproductos);

        data.forEach(products => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `  
            <img class = 'detalle-img' src="${ruta_imagenes + products.imagen}" alt="${ruta_imagenes}" >
            <p>Marca: ${products.marca}</p>
            <p class="custom-paragraph" >${products.producto}</p>
            <p>Descripción: ${products.descripcion}</p>
            <p>Cantidad: ${products.cantidad}</p>
            <p id='Precio'>Precio: ${products.precio}</p>
            `;
            listaproductos.appendChild(listItem);
        });

        
            const producto = data[0];
            const monto = producto.precio;
            localStorage.setItem('monto', monto);


    })

