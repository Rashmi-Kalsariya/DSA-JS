

const SumOf_N_Nums = (n) => {

    if (n == 0) {
        return 0;
    }

    return n + SumOf_N_Nums(n - 1);

}

console.log(SumOf_N_Nums(5));