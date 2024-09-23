

const CheckPaliOfString = (str, i, j) => {
    if (i >= j) {
        return true;
    }
    return str[i] == str[j] && CheckPaliOfString(str, i + 1, j - 1);
}

console.log(CheckPaliOfString("racecar", 0, 6));

