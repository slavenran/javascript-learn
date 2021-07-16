// Using unshift
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

// Using splice
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.splice(0, 0, n);
        return arr;
    }
}

// Using concat
function countdown(n) {
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}

// Using countdown
function countdown(n) {
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}