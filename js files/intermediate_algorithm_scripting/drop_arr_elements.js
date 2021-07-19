function dropElements(arr, func) {
    let cond = false;
    return arr.filter(elem => {
        if (func(elem)) {
          cond = true;
        }
        return cond;
      });
}

console.log(dropElements([0,1,0,1], n => n === 1));