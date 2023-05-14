(() => {
    const app = {
        HTMLElement: {
            fibonacci: document.getElementById("fibonacci"),
            numberFromInput: document.getElementById("numero"),
            numberList: document.getElementById("response")
        },
        init() {
            app.HTMLElement.fibonacci.addEventListener('submit', app.handlers.fibonacciFromSubmitHandler)
        },
        handlers: {
            fibonacciFromSubmitHandler(event) {
                event.preventDefault();
                const numero = app.HTMLElement.numberFromInput.value;
                const fibonacciNumbers = app.methods.getfibonacciNumbers(numero);
                app.methods.printFibonacciNumbers(fibonacciNumbers)
            }
        },
        methods: {
            getfibonacciNumbers(quantity) {
                const fibonacciNumbers = [];
                let fibonacciNumber = 0;
                for (let i = 0; i < quantity; i++) {
                    if (i === 0 || i === 1) {
                        fibonacciNumber = i;
                    }
                    else {
                        fibonacciNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
                    }
                    fibonacciNumbers.push(fibonacciNumber);
                }
                return fibonacciNumbers;
            },
            printFibonacciNumbers(fibonacciNumbers) {
                const numbersList = app.HTMLElement.numberList;
                numbersList.innerHTML = "";
                let id = 0
                fibonacciNumbers.forEach((fibonacciNumber) => {
                    const listItem = document.createElement("button");
                    listItem.id = id;
                    listItem.setAttribute("onclick", "alert(id)");
                    listItem.classList.add("list-group-item");
                    listItem.textContent = fibonacciNumber;
                    numbersList.appendChild(listItem);
                    id = id + 1;
                });

            }
        },
    };
    app.init();
})();

function alert(id) {
    let result = confirm("estas seguro que quieres Eliminar");

    if (result === true) {
        document.getElementById(id).remove();
    }
}