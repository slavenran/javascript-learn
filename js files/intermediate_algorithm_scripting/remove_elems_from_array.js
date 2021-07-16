function destroyer(arr) {
    // Remove first func. argument which is an arr
    // Object.values(arguments).shift();

    let elemsToDelete = Array.from(arguments).slice(1);

    // Get list of arguments values and return all elements that don't match them
    // return arr.filter(elem => !Object.values(arguments).includes(elem));

    return arr.filter(elem => !elemsToDelete.includes(elem))
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Best solution
function destroyerBetter(arr, ...elemsToDelete) {
    return arr.filter(elem => !elemsToDelete.includes(elem));
}

console.log(destroyerBetter([1, 2, 3, 1, 2, 3], 2, 3));