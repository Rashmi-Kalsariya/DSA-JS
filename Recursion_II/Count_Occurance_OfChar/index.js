

const CountOccuranceOfChar = (str, char, i) => {
    if (i == str.length) {
        return 0;
    }
    return str[i] == char ? 1 + CountOccuranceOfChar(str, char, i + 1) : CountOccuranceOfChar(str, char, i + 1);
}

console.log(CountOccuranceOfChar("hello", "l", 0));


