function sentensify(str) {
    return str.split(/[^a-zA-Z0-9_]/).join(" ")
}

console.log(sentensify("May-the-force-be-with-you"));