

const ReverseArr = (arr, i, j) => {

    if (i >= j) {
        return arr;
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return ReverseArr(arr, i + 1, j - 1);
}

console.log(ReverseArr([1, 2, 3, 4, 5], 0, 4));



