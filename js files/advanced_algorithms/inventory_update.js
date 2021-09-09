function updateInventory(arr1, arr2) {
    // extract inventory items' titles
    const invItems = arr1.map(([_, title]) => title);

    // compare titles of the new inventory
    for (let [num, title] of arr2) {
        const itemIndex = invItems.indexOf(title);
        if (itemIndex !== -1) {
            arr1[itemIndex][0] += num;
            continue;
        }
        arr1.push([num, title]);
    }

    // sort updated inventory by titles
    arr1.sort((a, b) => {
        let titleA = a[1].toUpperCase();
        let titleB = b[1].toUpperCase();
        return titleA.localeCompare(titleB);
    });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));