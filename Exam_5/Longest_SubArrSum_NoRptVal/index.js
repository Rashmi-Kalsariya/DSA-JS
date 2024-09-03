let arr = [1, 2, 3, 4, 5];

const SubArr_Sum = (arr) => {

    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {

        let subArr = 0;
        let subArrSum = new Set();

        for (let j = i; j < arr.length; j++) {

            subArr += arr[j];

            if (subArrSum.has(subArr)) break;

            subArrSum.add(subArr);

            maxLength = Math.max(maxLength, j - i + 1);

        }
    }

    return maxLength;
}


console.log(SubArr_Sum(arr));
