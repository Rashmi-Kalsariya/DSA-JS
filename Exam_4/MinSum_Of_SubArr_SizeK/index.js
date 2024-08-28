
let arr = [2, 1, 5, 1, 3, 2];
let k = 3;


const Find_Min = (arr, k) => {
    let minsum = 0;
    let currsum = 0;

    for (let i = 0; i < k; i++) {
        currsum += arr[i]
    }

    minsum = currsum;

    for (let i = k; i < arr.length; i++) {
        currsum += arr[i]
        currsum -= arr[i - k]
        minsum = Math.min(minsum, currsum);
    }

    return minsum;
}


console.log(Find_Min(arr, k));
