(() => {
    const app = {
        HTMLElement: {
            laboratorio: document.getElementById("Laboratorio"),
            labPalindromo: document.getElementById("pali"),
            labCadena: document.getElementById("cadena"),
            labAnio: document.getElementById("anio"),
            labPrimo: document.getElementById("primo"),
            palindromo: document.getElementById("id1"),
            caracter: document.getElementById("id2"),
            bisiesto: document.getElementById("id3"),
            primo: document.getElementById("id4")
        },
        init() {
            app.HTMLElement.laboratorio.addEventListener('submit', app.handlers.palindromoFromSubmitHandler),
                app.HTMLElement.labCadena.addEventListener('submit', app.handlers.caracterFromSubmitHandler),
                app.HTMLElement.labAnio.addEventListener('submit', app.handlers.bisiestoFromSubmitHandler),
                app.HTMLElement.labPrimo.addEventListener('submit', app.handlers.primoFromSubmitHandler)
        },
        handlers: {
            palindromoFromSubmitHandler(event) {
                event.preventDefault();
                const palindromo = app.HTMLElement.palindromo.value;
                const palindromoNumber = app.methods.valPalindromo(palindromo);
                console.log(palindromoNumber);
            },
            caracterFromSubmitHandler(event) {
                event.preventDefault();
                const caracter = app.HTMLElement.caracter.value;
                const caracteres = app.methods.contarCaracteres(caracter);
            },
            bisiestoFromSubmitHandler(event) {
                event.preventDefault();
                const bisiesto = app.HTMLElement.bisiesto.value;
                const biciestos = app.methods.valBisiesto(bisiesto);
            },
            primoFromSubmitHandler(event) {
                event.preventDefault();
                const primo = app.HTMLElement.primo.value;
                const primos = app.methods.obtenerPrimo(primo);
            }
        },
        methods: {
            valPalindromo(palindromo) {
                var numero = parseInt(palindromo);
                var binario = (numero).toString(2);
                var binarioInv = "";
                var numeroInv = "";
                binarioInv = cambioposicion(binario);
                numeroInv = cambioposicion(numero.toString());

                function cambioposicion(cad) {

                    var result = "";

                    for (var i = cad.length; i > 0; i--) {

                        result += cad[i - 1];

                    }

                    return result;
                }

                if (numero == parseInt(numeroInv) && binario == binarioInv) {
                    console.log("Es Palindromo de doble base")
                } else {
                    console.log("No es Palindromo de doble base")
                }
            },

            contarCaracteres(caracter) {
                const cadena = caracter;
                const caracteres = [... new Set(cadena.toLowerCase())]

                for (var i = 0; i < caracteres.length; i++) {
                    let arreglo = []
                    cadena.split('').map(n => {
                        if (n.toLowerCase() === caracteres[i]) {
                            arreglo.push(n)
                        }

                    })
                    console.log(`La cantidad de ${caracteres[i]} es: ${arreglo.length}`);
                }

            },
            valBisiesto(bisiesto) {
                var bisiesto;
                var anio = bisiesto;
                bisiesto = ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0));

                if (bisiesto) {
                    console.log("Soy bisiciesto")
                } else {
                    console.log("No soy bisiciesto")
                }

            },
            obtenerPrimo(primos) {

                let maximo = primos
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

                function sumarPrimos(suma) {
                    var sumatoria = 0;
                    var sum = 0;
                    for (var a = suma.length; a > 0; a--) {
                        sum = suma[a - 1];
                        sumatoria = sumatoria + sum;
                    }
                    return sumatoria
                }
                console.log(suma);
            }
        }
    };
    app.init();
})();