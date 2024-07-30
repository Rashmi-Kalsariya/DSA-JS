let arr = [1, 2, 2, 3, 4, 4, 5]

const Dups = () => {
    let Arr = [];

    for (let i = 0; i < arr.length; i++) {

        if (!Arr.includes(arr[i])) {

            Arr.push(arr[i]);

        }

    }

    return Arr;
}


console.log(Dups()); 