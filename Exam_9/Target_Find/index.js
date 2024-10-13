let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let target = 5

const Find_Target = (arr) => {

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] + arr[j] == target) {
            return i + 1;
        }
        else if (arr[i] + arr[j] > target) {
            j--;
        }
        else {
            i++;
        }
    }
    return;
   
}

console.log(Find_Target(arr));