
function getfibonacciNumbers(quantity) {
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
}

console.log(getfibonacciNumbers(10))

