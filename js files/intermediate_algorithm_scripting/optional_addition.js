function addTogether(a, b) {
    // Check if both arguments are numbers and check if b is present
    return typeof a == "number" && (typeof b == "number" || b == undefined) ?
    b != undefined ?
    a + b
    : b => {return typeof b == 'number' ? a + b : undefined}
    : undefined
}

console.log(addTogether(2,3));

let vat = addTogether(2);
console.log(vat(3))