

const ReverseString = (str, i = 0) => {
    if (i == str.length)
        return "";

    return ReverseString(str, i + 1) + str.charAt(i);
};

console.log(ReverseString("recursion")); 
