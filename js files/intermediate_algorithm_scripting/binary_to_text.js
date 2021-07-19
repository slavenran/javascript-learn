function binaryAgent(str) {
    // Function for transforming binary to decimal number
    const fromBin = x => {
      let binarySplit = x.split("");
      binarySplit.reverse();
      let sum = 0;
  
      for(let i = 0; i < binarySplit.length; i++) {
        if(binarySplit[i] == 1) {
          sum += 2**i;
        }
      }
      return sum;
    };
  
    return str.split(" ").map(elem => String.fromCharCode(fromBin(elem))).join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));



// With parseInt function that takes number base as an argument
function binaryAgentBetter(str) {
    return String.fromCharCode(
      ...str.split(" ").map(char => parseInt(char, 2))
    );
}

// test here
console.log(binaryAgentBetter(
"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
));