// Seek and Destroy
function destroyer(arr) {
    var initialArr = arr;
    // print out arr[0]
    console.log("initialArr=" + initialArr);

    // read more about Argument Object
    // The argument object contains an array of the arguments used when the function was called
    var removeArr = [];
    for (var i = 1; i < arguments.length; i++) {
        removeArr.push(arguments[i]);
    }
    // print out remaining parameters
    console.log("removeArr=" + removeArr);

    function isRemove(value) {
        if (!removeArr.includes(value)) {
            return true;
        } else {
            return false;
        }
    }

    // filter
    var filtered = initialArr.filter(isRemove);

    return filtered;
}



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
