let arr = [5, 7, 7, 8, 8, 10];
let target = 8;

const Find_First_Last_Pos = (arr, target) => {

    let s = -1
    let e = -1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == target) {

            if (s == -1)
                s = i;
            e = i;

        }
    }

    return [s, e];
}

console.log(Find_First_Last_Pos(arr, target));

