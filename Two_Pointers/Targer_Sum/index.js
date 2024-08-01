
let arr = [1, 2, 3, 4, 5]

target = 9;

const TargetSum = (arr, target) => {

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] + arr[j] == target) {
            return true;
        }
        else if (arr[i] + arr[j] > target) {
            j--;
        }
        else {
            i++;
        }
    }

    return false
}


console.log(TargetSum(arr, target));