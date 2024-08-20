// SubArray
// TC && SC


let arr = [1, 4, -10, 4];

for (i = 0; i < arr.length; i++) {
    let SubArray = [];

    for (j = i; j < arr.length; j++) {
        SubArray.push(arr[j])
        console.log(SubArray);

    }
}

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// const SubArray_MaxSum = (arr) => {
//     let maxSum = 0;
//     let currSum = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > currSum + arr[i]) {
//             currSum = arr[i];
//         } else {
//             currSum += arr[i];
//         }

//         if (currSum > maxSum) {
//             maxSum = currSum;
//         }
//     }

//     return maxSum;
// }

// console.log(SubArray_MaxSum(arr));
