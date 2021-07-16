function add(x) {
    return y => z => x + y + z;
}

function addNoArrow(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

add(10)(20)(30);