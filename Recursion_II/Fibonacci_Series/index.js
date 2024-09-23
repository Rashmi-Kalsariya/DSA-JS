

const Fibonacci = (n) => {


    if (n == 0 || n == 1) {
        return 1
    }

    return n * Fibonacci(n - 1);

}

console.log(Fibonacci(5));
