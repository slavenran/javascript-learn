var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return [...arr].sort((a, b) => a - b)
}

console.log(nonMutatingSort(globalArray));