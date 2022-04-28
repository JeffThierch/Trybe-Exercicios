"use strict";
function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const test = [1, 2, 3, 4];
const testfx = myFilter(test, (item, index, arr) => {
    console.log(index);
    console.log(arr);
    return item !== 1;
});
console.log(testfx);
