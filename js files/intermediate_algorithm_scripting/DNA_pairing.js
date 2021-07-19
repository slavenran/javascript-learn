function pairElement(str) {
    let pairs = {
      "G": "C",
      "C": "G",
      "A": "T",
      "T": "A"
    }
  
    let arr = str.split("").map(elem => [elem, pairs[elem]]);
    return arr;
}

console.log(pairElement("GCG"));