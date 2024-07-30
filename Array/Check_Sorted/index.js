



const isSorted = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;

}

let arr1 = [1, 2, 3, 4, 5];
console.log(isSorted(arr1));

let arr2 = [5, 3, 4, 1, 2];
console.log(isSorted(arr2)); 
