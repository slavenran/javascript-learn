function steamrollArray(arr) {
    return arr.join().split(",").filter(elem => elem != "").map(elem => !isNaN(elem) ? parseInt(elem) : elem == {} ? {} : elem);
}

console.log(steamrollArray([1, [2], [], {}, [3, [[4]]]]));


// Cleaner solution without hard code
function betterSteamroll(arr) {
    let newArr = [].concat(...arr);
    return newArr.some(Array.isArray) ? betterSteamroll(newArr) : newArr;
}

console.log(betterSteamroll([1, [2], [], {}, [3, [[4]]]]));