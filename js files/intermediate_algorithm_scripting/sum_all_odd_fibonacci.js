function sumFibs(num) {
    let no1 = 0;
    let no2 = 1;
    let res = 0;
  
    while(no2 <= num) {
      if (no2 % 2 != 0) {
        res += no2;
      }
      no2 += no1;
      no1 = no2 - no1;
    }
    return res;
}

console.log(sumFibs(10));

// Array style
function sumFibsArr(num) {
    if (num == 0) {
        return 0;
    }
  
    let fibArray = [1, 1];
    let fibNext = 0;

    while ((fibNext = fibArray[0] + fibArray[1]) <= num) {
        fibArray.unshift(fibNext);
    }
    return fibArray.filter(elem => elem % 2 != 0).reduce((sum, elem) => sum + elem);
}

console.log(sumFibsArr(10));