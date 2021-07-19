// function fearNotLetter(str) {
//     let j = 0;
//     for (let i = str.charCodeAt(0); i <= str.charCodeAt(str.length-1); i++) {
//       if (!(str.charCodeAt(j) === i)) {
//         return String.fromCharCode(i);
//       }
//       j++;
//     }
//     return undefined;
// }

// console.log(fearNotLetter("abce"));


// Smarter solution
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        // Check if next - current number code are equal to 1, if not then pass the letter code between them
        if (!(str.charCodeAt(i+1) - str.charCodeAt(i) === 1)) {
            return String.fromCharCode(str.charCodeAt(i)+1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abcefg"));


// Array solution
function fearNotLetterArr(str) {
    let currentChar = str.charCodeAt(0);
    let missing = undefined;

    str
    .split("")
    .forEach(letter => {
        letter.charCodeAt(0) === currentChar ?
        currentChar++
        : missing = String.fromCharCode(currentChar)
    });

    return missing;
}

console.log(fearNotLetterArr("abcefg"))