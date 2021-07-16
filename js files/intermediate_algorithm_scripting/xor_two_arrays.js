// Function that returns entries that are contained in only 1 of 2 given arrays
function diffArray(arr1, arr2) {
    var joinedArr = arr1.concat(arr2);
    // XOR operand
    var newArr = joinedArr.filter(elem => !arr1.includes(elem) || !arr2.includes(elem));
    return newArr;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));