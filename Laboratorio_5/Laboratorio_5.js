(() => {
    const app = {
        HTMLElement: {
            promedioEstudiante: document.getElementById("Promedio"),
            calcularFrom: document.getElementById("CalcularForm"),
            numeroNota: document.getElementById("nota"),
            numberList: document.getElementById("response"),
            graficaForm: document.getElementById("grafica")
        },
        init() {
            app.HTMLElement.promedioEstudiante.addEventListener('submit', app.handlers.promedioFromSubmitHandler),
                app.HTMLElement.calcularFrom.addEventListener('submit', app.handlers.calcularPromFromSubmitHandler)
        },
        handlers: {
            promedioFromSubmitHandler(event) {
                event.preventDefault();
                const numero = app.HTMLElement.numeroNota.value;
                app.methods.printInput(numero)
            },
            calcularPromFromSubmitHandler(event) {
                event.preventDefault();
                const numero = app.HTMLElement.numeroNota.value;
                const promedio = app.methods.Calcular(numero);
                app.methods.printGraficaForm(promedio);
            }
        },
        methods: {
            printInput(fibonacciNumbers) {
                const numbersList = app.HTMLElement.numberList;
                numbersList.innerHTML = "";
                let id = 0
                for (let index = 0; index < fibonacciNumbers; index++) {
                    const listItem = document.createElement("input");
                    listItem.id = id;
                    listItem.type = "number";
                    listItem.classList.add("list-group-item");
                    numbersList.appendChild(listItem);
                    id = id + 1;
                }
                document.getElementById("calcularPromedio").style.display = "block";
                document.getElementById("enviar").style.display = "none";
            },
            Calcular(numero) {
                let notas = 0;
                let suma = 0;
                let promedio = 0;
                for (let index = 0; index < numero; index++) {

                    notas = document.getElementById(index).value;
                    suma = suma + parseInt(notas);
                    promedio = suma / 100;
                }

                return promedio;
            },
            printGraficaForm(promedio) {

                var data = [promedio];

                var canvas = document.getElementById("graficas")

                var ctx = canvas.getContext('2d');

                var chartWidth = canvas.width;
                var chartHeight = canvas.height;
                var barSpacing = 30;

                var barWidth = (chartWidth - (barSpacing * (data.length - 1))) / data.length;
                var maxValue = Math.max.apply(Math, data.map(function (item) { return item.population; }));

                for (var i = 0; i < data.length; i++) {
                    var barX = i * (barWidth + barSpacing);
                    var barHeight = (data[i].population / maxValue) * chartHeight;

                    ctx.fillStyle = '#007bff'; // Color de las barras
                    ctx.fillRect(barX, chartHeight - barHeight, barWidth, barHeight);

                    // Agregar etiquetas de países
                    ctx.fillStyle = '#000';
                    ctx.font = '12px Arial';
                    ctx.fillText(data[i].country, barX, chartHeight + 15);
                }
            }
        },
    };
    app.init();
})();
