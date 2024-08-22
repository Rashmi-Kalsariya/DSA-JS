let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
let k = 3;



const MinSum_SubArr = (arr, k) => {

    let minSum = 0;
    let currSum = 0;

    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }

    minSum = currSum;

    for (let i = k; i < arr.length; i++) {
        currSum += arr[i] - arr[i - k];
        minSum = Math.min(minSum, currSum);
    }

    return minSum;

};

console.log(MinSum_SubArr(arr, k));