

const SumOfArrEle = (arr, n) => {

    if (n == 0) {
        return 0;
    }

    return arr[n - 1] + SumOfArrEle(arr, n - 1);

}

console.log(SumOfArrEle([10, 20, 30], 3));
