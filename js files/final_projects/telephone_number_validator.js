function telephoneCheck(str) {
    return (/^(1 |1)?(\(\d{3}\)|\d{3})(-| )?\d{3}(-| )?\d{4}$/).test(str);
}

console.log(telephoneCheck("1 555-555-5555"));