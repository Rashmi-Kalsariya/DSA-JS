

const arr = [1, 3, 4, 5, 7];

const findMissing = (arr) => {
    let n = arr.length

    let totalSum = 0
    for (let i = 1; i <= arr.length + 1; i++) {
        totalSum += i
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }

    return totalSum - sum

}

console.log(findMissing(arr));
