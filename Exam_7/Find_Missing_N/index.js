let arr = [3, 0, 1];

const Find_Missing_N = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return arr.length * (arr.length + 1) / 2 - sum;
};

console.log(Find_Missing_N(arr));
