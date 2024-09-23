

const GreatestCommonDivisor = (a, b) => {
    if (b == 0) {
        return a;
    }
    return GreatestCommonDivisor(b, a % b);
}

console.log(GreatestCommonDivisor(48, 18));


