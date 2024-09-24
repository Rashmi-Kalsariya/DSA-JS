let arr = [1, 2, 3, 1];


const Find_Peak_Ele = (arr) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid] > arr[mid + 1]) {
            j = mid;
        } else {
            i = mid + 1;
        }
    }
    return i;
}

console.log(Find_Peak_Ele(arr));

