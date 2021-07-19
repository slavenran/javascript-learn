function sumFibs(num) {
    if (num == 1) {
      return 1;
    }
    if (num == 0) {
      return 0;
    }
    return sumFibs(num-1) + sumFibs(num-2);
}

console.log(sumFibs(3));