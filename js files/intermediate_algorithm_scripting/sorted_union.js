// function uniteUnique(...arr) {
//     // join all passed arrays and join numbers, parse them to int
//     let joinedArr = arr.join().split(",").map(elem => parseInt(elem));
//     let newArr = [];
//     // push all unique numbers to new array
//     joinedArr.forEach(elem => {
//       if (!newArr.includes(elem)){
//         newArr.push(elem);
//       }
//     });
//     return newArr;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));



// Better version
function uniteUnique(...arr) {
    // join all passed arrays and join numbers, parse them to int
    let joinedArr = arr.flat();

    // push all unique numbers to new array
    return joinedArr.filter((elem, pos) => joinedArr.indexOf(elem) == pos);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


// With Set
function uniteUniqueAdv(...arr) {
    // let joined = [].concat(...arr);
    // return [...new Set(joined)];

    // with flat() method
    return [...new Set(arr.flat())]
}

console.log(uniteUniqueAdv([1, 3, 2], [5, 2, 1, 4], [2, 1]));