let n = 10;

const isPrime = (n) => {
    let prime = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            prime++;
        }
    }

    return prime == 2;
}

const Prime = (n) => {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);

        }
    }
}

Prime(n)

