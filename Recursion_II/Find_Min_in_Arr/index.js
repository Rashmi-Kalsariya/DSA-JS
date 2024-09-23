

const FindMin = (arr, i = 0) => {
    if (i == arr.length - 1) {
        return arr[i];
    }
    return Math.min(arr[i], FindMin(arr, i + 1));
}

console.log(FindMin([1, 2, 3, 4, 5]));
