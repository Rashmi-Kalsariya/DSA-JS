
let count = 0;

let arr = [1, 2, 2, 3, 2, 4, 5]
target = 2;

const Occurrence = () => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            count++;
        }
    }
    return count;
}

console.log(Occurrence()); 
