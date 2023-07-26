

localStorage.setItem("botonBloqueado", "true");
console.log(localStorage);
const form = document.getElementById('registAdmin');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;
    const categoria = document.getElementById('tipo').value;
    const marca = document.getElementById('marca').value;
    
    fetch(`http://localhost:3000/administrar?producto=${producto}&cantidad=${cantidad}&precio=${precio}&descripcion=${descripcion}&imagen=${imagen}&categoria=${categoria}&marca=${marca}`)
        .then(response => response.json())
        .then(data => {
        if (data.length === 0) {
            alert("Registro fallido");
        } else {
            alert("Registro exitoso");
            window.location.href = "administrar.html";
        }
        
        })
});