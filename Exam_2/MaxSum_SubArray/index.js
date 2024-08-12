let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const SubArr_MaxSumWithIndex = (arr) => {
    let maxSum = 0;
    let currSum = 0;
    let s = 0;
    let e = 0;
    let temp = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > currSum + arr[i]) {
            currSum = arr[i];
            temp = i;
        }
        else {
            currSum += arr[i];
        }
        if (currSum > maxSum) {
            maxSum = currSum;
            s = temp;
            e = i;
        }
    }

    return { maxSum, s, e };
}

const result = SubArr_MaxSumWithIndex(arr);
console.log(`MaxSum: ${result.maxSum}\nStart Index: ${result.s}\nEnd Index: ${result.e}`);
