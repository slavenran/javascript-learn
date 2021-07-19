// My basic solution
function whatIsInAName(collection, source) {
    var arr = [];

    for (let obj of collection) {
      let hasAll = true;
      for (let [key, value] of Object.entries(source)) {
        if (!(obj.hasOwnProperty(key) && obj[key] === value)) {
          hasAll = false;
        };
      }
      if (hasAll) {
        arr.push(obj);
      }
    }

    return arr;
}
  
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));



// My functional solution
function whatIsInANameFunc(collection, source) {
    var arr = [];
    let keys = Object.keys(source)

    // Filter array of object and then check for every key in array of all keys
    arr = collection.filter(obj => 
        keys.every(key => 
            (obj.hasOwnProperty(key) && obj[key] === source[key])
        )
    );

    return arr;
}
  
console.log(whatIsInANameFunc([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));