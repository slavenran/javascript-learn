function myReplace(str, before, after) {
    let firstChar = after[0];
    let remaining = after.slice(1, after.length+1);
  
    // Case of first letter must match the work that is being replaced
    before[0] === before[0].toUpperCase() ?
      after = firstChar.toUpperCase() + remaining
      : after.toLowerCase()
    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


// Array approach
function myReplaceFunct(str, before, after) {
  
    return arr = str.split(" ")
    .map(elem => elem === before ?
        elem[0] === elem[0].toUpperCase() ?
        after[0].toUpperCase() + after.slice(1, elem.length+1) : after.toLowerCase()
        : elem)
    .join(" ");
}

console.log(myReplaceFunct("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));