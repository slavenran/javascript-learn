function translatePigLatin(str) {
    // Check if first letters are consonants
    let cons = str.match(/^[b-df-hj-np-tv-z]+/);
    if (cons != null) {
      return str.slice(cons[0].length) + cons + "ay";
    }
    return str + "way";
}

console.log(translatePigLatin("glove"));


// Shorter, cleaner version
function translatePigLatin2(str) {
    // Check if first letters are consonants
    let consRegEx = /^[b-df-hj-np-tv-z]+/;
    let cons = str.match(consRegEx);
    // return cons != null ? str.slice(cons[0].length) + cons + "ay" : str + "way";
    return cons != null ? str.replace(consRegEx, "").concat(cons).concat("ay") : str.concat("way");
}

console.log(translatePigLatin2("glove"));