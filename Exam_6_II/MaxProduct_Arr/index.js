
const MaxProduct_Arr = (arr) => {

    let max = 0;
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    return max * min;
}


console.log(MaxProduct_Arr([1, 7, 3, 4, 6]));