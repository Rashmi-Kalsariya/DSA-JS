let arr = [10, 40, 3, 8, 90];


const Largest = () => {
    let larg = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > larg) {
            larg = arr[i];
        }
    }

    return larg;
}

console.log(Largest()); 
