function decipherFun(char) {
    let charCode = char.charCodeAt() + 13;
    if (charCode > 90) {
      charCode = 65 + charCode - 90 - 1;
    }
    return String.fromCharCode(charCode);
}

function rot13(str) {
    let decipher = str.replace(/[A-Z]/g, decipherFun);
    return decipher;
}

console.log(rot13("SERR PBQR PNZC"));