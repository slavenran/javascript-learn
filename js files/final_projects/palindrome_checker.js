function palindrome(str) {
    // Match all alphanumeric characters
    str = str.toLowerCase().match(/[a-z0-9]/g);
    // Make copies of original array, reverse one, join them into strings
    let normal = [...str].join("");
    let reversed = [...str].reverse().join("");
    // Compare equality of 2 strings
    return normal == reversed;
}



console.log(palindrome("1 eye for of 1 eye."));