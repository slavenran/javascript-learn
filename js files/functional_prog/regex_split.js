function splitify(str) {
    return str.split(/[^a-zA-Z]/)
}

console.log(splitify("Hello World,I-am code"));