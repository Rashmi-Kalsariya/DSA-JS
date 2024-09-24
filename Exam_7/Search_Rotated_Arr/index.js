let arr = [4, 5, 6, 7, 0, 1, 2];

const Search_Rotated_Arr = (arr) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        console.log(mid);
        if (arr[mid] > arr[j]) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return i;
};

console.log(Search_Rotated_Arr(arr));