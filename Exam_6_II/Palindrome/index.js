
const palindrome = (string, i = 0, j = string.length - 1) => {

    if (i >= j) return true;

    if (string.charAt(i).toLowerCase() !== string.charAt(j).toLowerCase()) return false;

    return palindrome(string, i + 1, j - 1);
};

console.log(palindrome("racecar")); 
