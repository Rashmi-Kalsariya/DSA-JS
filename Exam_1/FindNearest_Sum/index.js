const FindTarget_PairSum = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;
    let sum = 0;
    let result = [];

    while (i < j) {
        sum = arr[i] + arr[j];

        if (sum < target) {
            result = [arr[i], arr[j]];
            i++;
        } else {
            j--;
        }
    }

    return result;
};

let arr = [1, 3, 4, 7, 10];
let target = 15;

console.log(FindTarget_PairSum(arr, target)); 