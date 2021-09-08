const diff = (arr1, arr2) => [
    ...arr1.filter(elem => !arr2.includes(elem)),
    ...arr2.filter(elem => !arr1.includes(elem))
]

const sym = (...args) => [...new Set(args.reduce(diff))]

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));