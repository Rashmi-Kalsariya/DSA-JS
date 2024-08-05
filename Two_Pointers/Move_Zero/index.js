const Move_0 = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
};

let arr = [1, 2, 0, 3, 0, 0, 4];

const result = Move_0(arr);

console.log(result);