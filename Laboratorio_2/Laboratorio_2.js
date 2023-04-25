var numero_uno = 10;
var numero_dos = 5;
console.log("Variables var");

console.log(numero_uno + numero_dos);
console.log(numero_uno - numero_dos);
console.log(numero_uno * numero_dos);
console.log(numero_uno / numero_dos);


let palabra_uno = "hola ";
let palabra_dos = "Mundo";
console.log();
console.log("Variables let");
console.log(palabra_uno + palabra_dos);

console.log();
const a = "hola";
const b = 2;
console.log("Variables const");
console.log(typeof a);
console.log(typeof b);

console.log();
console.log();

var numero = 10;

function ismultiple(valor, mult){
    var resp = valor % mult;
    if (resp == 0)
    return true
    else 
    return false
}


function multiple(num){
    var min = 0;
    var respuesta = 0;
    for (var i = num;i > min; i--){

        if (ismultiple(i,3)){
            console.log("3 " + i);
        respuesta = respuesta + i;
        }

        if (ismultiple(i,5)){
            console.log("5 " + i);
                respuesta = respuesta + i;  
            }
        }
    
    return respuesta
}

console.log(multiple(numero))
