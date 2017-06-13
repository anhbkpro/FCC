// Sum All Numbers in a Range

function sumAll(arr) {
    var max = getMaxOfArray(arr);
    var min = getMinOfArray(arr);
    console.log("min=" + min + ", max=" + max);
    var total = 0;
    for (var i = min; i <= max; i++) {
        total += i;
    }
    return total;
}

// The following function uses Function.prototype.apply() to find the maximum element in a numeric array.
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
// Array.reduce() can also be used to get the maximum of an array, by comparing each value.
function getMinOfArray(numArray) {
    var min = numArray.reduce(function (a, b) {
        return Math.min(a, b);
    });
    return min;
}

sumAll([1, 4]);