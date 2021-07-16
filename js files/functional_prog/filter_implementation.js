// Implementing your own .filter() function
var s = [23, 65, 98, 5];

// New map function
Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // iterate throught the list s, use callback function to alter
  this.forEach(element => {
    if (callback(element)) {
        newArray.push(element)
    }
  });
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});