

const PowerOfNumber = (a, b) => {
    if (b == 0) {
        return 1;
    }
    return a * PowerOfNumber(a, b - 1);
}

console.log(PowerOfNumber(2, 3));


