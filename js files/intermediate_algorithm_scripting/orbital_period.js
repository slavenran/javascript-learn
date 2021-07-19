function changeObj(obj) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    let alt = obj["avgAlt"];
    delete obj["avgAlt"];
  
    obj["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt((earthRadius + alt)**3/GM));
    return obj;
}

function orbitalPeriod(arr) {
    return arr.map(elem => changeObj(elem));
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));