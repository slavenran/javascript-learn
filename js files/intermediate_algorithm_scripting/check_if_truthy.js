function truthCheck(collection, pre) {
    return collection.every(elem => elem.hasOwnProperty(pre) && elem[pre]);
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));



// Even shorter
function truthCheck2(collection, pre) {
    // Ommit checking if hasOwnProperty and it works fine
    return collection.every(elem => elem[pre]);
}