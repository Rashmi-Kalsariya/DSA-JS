const FindPair_TargetSum = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;
    let result = [];

    while (i < j) {
        let sum = arr[i] + arr[j];

        if (sum == target) {
            result.push([arr[i], arr[j]]);
            i++;
            j--;
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }

    return result;
};

let arr = [1, 2, 3, 4, 5, 6];
let target = 7;

console.log(FindPair_TargetSum(arr, target)); 
