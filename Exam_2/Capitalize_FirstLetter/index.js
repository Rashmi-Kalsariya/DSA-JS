let str = "the quick Brown fox jumps over The lazy dog"


const Capitalize_Letter = (str) => {

    let capitalized = str.replace(/\b\w/g, char => char.toUpperCase());

    console.log(capitalized);


}

console.log(Capitalize_Letter(str));
