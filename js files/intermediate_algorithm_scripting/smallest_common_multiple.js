function gcd(a, b) {
    // Find greatest common divisor
    return b === 0 ? a : gcd(b, a % b);
}
  
function lcm([a, b]) {
    return a*b/gcd(a, b); 
}
  
function smallestCommons(arr) {
    let [a, b] = arr.sort((a, b) => a - b);
    let fullRange = [];
    // Fill the full range
    for (let i = a; i <= b; i++) {
      fullRange.push(i);
    }
  
    while(fullRange.length > 1) {
      fullRange.unshift(lcm(fullRange.splice(0, 2)));
    }
    return fullRange[0];
}

console.log(smallestCommons([5, 1]));


// Advanced
function smallesComArr(arr) {
    const [min, max] = arr.sort((min, max) => min - max);
    // Fills the list range by adding min value to index. Range size is max - min + 1
    let fullRange = Array(max - min + 1).fill(0).map((_, i) => i + min);

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => a*b/gcd(a, b);

    return fullRange.reduce((prev, curr) => lcm(prev, curr));
}

console.log(smallesComArr([9, 4]));