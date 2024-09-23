
const CountOccurance = (arr, i, j) => {
    if (i == arr.length - 1) {
        return arr[i];
    }
    return arr[i] + CountOccurance(arr, i + 1, j);
}

console.log(CountOccurance([1, 2, 3, 4, 5], 0, 4));


