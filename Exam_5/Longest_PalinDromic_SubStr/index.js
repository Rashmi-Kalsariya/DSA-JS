let str = "bbbbb";

const Longest_Pali_NoRptVal = (str) => {

    let map = new Map();
    let result = "";

    for (let i = 0; i < str.length; i++) {

        if (!map.get(str[i])) {

            result += str[i];
            map.set(str[i], 1);

        }
        else {

            map.set(str[i], map.get(str[i]) + 1);

        }
    }

    return result;
};

console.log(Longest_Pali_NoRptVal(str));
