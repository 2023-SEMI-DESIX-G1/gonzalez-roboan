

var numero = 585;
var binario = (numero).toString(2);
var binarioInv = "";
var numeroInv = "";

function cambioposicion(cad) {

    var result = "";

    for (var i = cad.length; i > 0; i--) {

        result += cad[i - 1];

    }

    return result;
}

binarioInv = cambioposicion(binario);
numeroInv = cambioposicion(numero.toString());

if (numero == numeroInv && binario == binarioInv) {
    console.log("Es Palindromo de doble base")
} else {
    console.log("No es Palindromo de doble base")
}


function obtenerPrimo(maximo) {

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
    return primo;
}

let suma = obtenerPrimo(15)
var sumatoria = 0;
var sum = 0;
for (var a = suma.length; a > 0; a--) {
    sum = suma[a - 1];
    sumatoria = sumatoria + sum;
}

console.log(sumatoria);


var bisiesto;
function valBisiesto(anio) {
    var texto = document.getElementById("id1").value;

    console.log(texto)
    return ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0));
}

if (valBisiesto(1903)){
    console.log("Soy bisiciesto")
} else {
    console.log("No soy bisiciesto")
}


function contarCaracteresV2(cadena) {
    let caracteres = [... new Set(cadena.toLowerCase())]

    for(var i=0; i<caracteres.length; i++){
        let arreglo=[]
        cadena.split('').map(n => {
            if(n.toLowerCase() === caracteres[i]){
                arreglo.push(n)
            } 
            
        })
        console.log(`La cantidad de ${caracteres[i]} es: ${arreglo.length}`);
    }

}

console.log(contarCaracteresV2("AABBBACAA"));