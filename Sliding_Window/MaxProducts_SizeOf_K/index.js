

const MaxProducts = (arr, k) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i + k > arr.length) {
            break;
        }

        let product = 1;

        for (let j = i; j < k; j++) {
            product *= arr[j];
        }

        max = Math.max(max, product);
    }

    return max;
}


console.log(MaxProducts([1, 2, 3, 4, 5], 3));
