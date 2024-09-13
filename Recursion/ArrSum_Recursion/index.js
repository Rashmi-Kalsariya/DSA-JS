
let arr = [1, 2, 3, 4, 5]

const ArrSum = (arr, n, i = 0) => {

    if (i == n) {
        return 0;
    }

    return arr[i] + ArrSum(arr, n, i + 1);
}


console.log(ArrSum(arr, arr.length, 0));
