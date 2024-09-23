

const ReverseString = (str) => {
    if (str.length <= 1) {
        return str;
    }
    return ReverseString(str.slice(1)) + str[0];

}

console.log(ReverseString("hello"));