function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    for (let i = arr[0]+1; i < arr[1]; i++) {
      newArr.push(i);
    }
    newArr = [arr[0], ...newArr, arr[1]];
    return newArr.reduce((sum, elem) => sum + elem, 0);
}

function sumAllNew(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAllNew([1, 4]));