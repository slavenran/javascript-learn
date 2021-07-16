// Implementing your own .map() function
var s = [23, 65, 98, 5];

// New map function
Array.prototype.myMap = function(callback) {
  var newArray = [];
  // iterate throught the list s, use callback function to alter
  this.forEach(element => newArray.push(callback(element)));
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});