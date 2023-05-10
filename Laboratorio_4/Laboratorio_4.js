(() => {
    const app = {
        HTMLElement: {
            fibonacci: document.getElementById("fibonacci"),
            fibonacciFromInput: document.getElementById("quantity"),
            fibonacciNumbersList: document.getElementById("response")
        },
        init() {
            app.HTMLElement.fibonacci.addEventListener('submit', app.handlers.fibonacciFromSubmitHandler)
        },
        handlers: {
            fibonacciFromSubmitHandler(event) {
                event.preventDefault();
                const quantity = app.HTMLElement.fibonacciFromInput.value;
                const fibonacciNumbers = app.methods.getfibonacciNumbers(quantity);
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
                const fibonacciNumbersList = app.HTMLElement.fibonacciNumbersList;
                fibonacciNumbersList.innerHTML = " ";
                fibonacciNumbers.forEach((fibonacciNumber) => {
                    const listItem = document.createElement("div");
                    listItem.textContent = fibonacciNumber;
                    listItem.classList.add("list-group-item");
                    fibonacciNumbersList.appendChild(listItem);

                });

            }
        },
    };
    app.init();
})();