let str = "noode";

const Frequency = (str) => {
    let map = new Map();


    for (i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
        } else {
            map.set(str[i], 1);
        }
    }
    return map;
};

console.log(Frequency(str));
