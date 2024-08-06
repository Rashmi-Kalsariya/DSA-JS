// SubArray
// TC && SC


let arr = [1, 4, -10, 4];

for (i = 0; i < arr.length; i++) {
    let SubArray = [];

    for (j = i; j < arr.length; j++) {
        SubArray.push(arr[j])
        console.log(SubArray);

    }
}