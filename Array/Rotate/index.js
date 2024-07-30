

let arr = [1, 2, 3, 4, 5];
let positions = 2;

const Rotate = () => {

    let MainPos = positions % arr.length;

    let end = arr.slice(-MainPos);

    let start = arr.slice(0, arr.length - MainPos);

    let rotatedArray = end.concat(start);

    return rotatedArray;
}

console.log(Rotate());
