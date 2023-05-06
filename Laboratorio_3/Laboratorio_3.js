
function valPalindromo() {
    var numero = parseInt(document.getElementById("id1").value);
    var binario = (numero).toString(2);
    var binarioInv = "";
    var numeroInv = "";
    binarioInv = cambioposicion(binario);
    numeroInv = cambioposicion(numero.toString());

    if (numero == parseInt(numeroInv) && binario == binarioInv) {
        console.log("Es Palindromo de doble base")
    } else {
        console.log("No es Palindromo de doble base")
    }
}

function cambioposicion(cad) {

    var result = "";

    for (var i = cad.length; i > 0; i--) {

        result += cad[i - 1];

    }

    return result;
}


function contarCaracteres() {
    let cadena = document.getElementById("id2").value
    let caracteres = [... new Set(cadena.toLowerCase())]

    for (var i = 0; i < caracteres.length; i++) {
        let arreglo = []
        cadena.split('').map(n => {
            if (n.toLowerCase() === caracteres[i]) {
                arreglo.push(n)
            }

        })
        console.log(`La cantidad de ${caracteres[i]} es: ${arreglo.length}`);
    }

}



function valBisiesto() {
    var bisiesto;
    var anio = document.getElementById("id3").value;
    bisiesto = ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0));

    if (bisiesto) {
        console.log("Soy bisiciesto")
    } else {
        console.log("No soy bisiciesto")
    }

}

function obtenerPrimo() {

    let maximo = document.getElementById("id4").value
    let auxiliar = [];
    let primo = [];

    for (let i = 2; i <= maximo; ++i) {
        if (!auxiliar[i]) {
            primo.push(i);

            for (let j = i << 1; j <= maximo; j += i) {
                auxiliar[j] = true
            }
        }
    }

    let suma = sumarPrimos(primo);

    console.log(suma);
}

function sumarPrimos(suma) {
    var sumatoria = 0;
    var sum = 0;
    for (var a = suma.length; a > 0; a--) {
        sum = suma[a - 1];
        sumatoria = sumatoria + sum;
    }
    return sumatoria
}


