


let arr = [1, 2, 3, 4, 5];

let sum = 0;

const Sum = () => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(Sum());