
(() => {
    const app = {
        HTMLElement: {
            promEstudiante: document.getElementById("Promedio"),
            numeroProm: document.getElementById("nota")
        },
        init() {
            app.HTMLElement.promEstudiante.addEventListener('submit', app.handlers.promedioEstudiante)
        },
        handlers: {
            promedioEstudiante(event) {
                event.preventDefault();
                const numero = app.HTMLElement.numeroProm.value;
                notas.push(numero);
            }
        },
        methods: {
            getPromedioEstudiante(numero) {
                const numeroPromedios = [];
                numeroPromedios.push(numero);
            }
        },
    };
    app.init();
})();
