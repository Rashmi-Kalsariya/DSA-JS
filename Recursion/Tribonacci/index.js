const Tribonacci = (n) => {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;

    return Tribonacci(n - 1) + Tribonacci(n - 2) + Tribonacci(n - 3);
}

console.log(Tribonacci(10));


// output : 149