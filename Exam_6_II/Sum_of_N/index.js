
const Sumof_Digits = (n) => {
    if (n == 0) {
        return 0;
    }
    return (n % 10) + Sumof_Digits(Math.floor(n / 10));
}

console.log(Sumof_Digits(1234));
