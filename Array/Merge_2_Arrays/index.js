
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergeArr = () => {
    let Merge = [];

    for (let i = 0; i < arr1.length; i++) {
        Merge.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        Merge.push(arr2[i]);
    }

    return Merge;
}

console.log(mergeArr());
