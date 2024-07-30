let arr = [20, 4, 69, 70, 6];


const Smallest = () => {
    let small = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
        }
    }

    return small;
}

console.log(Smallest()); 
