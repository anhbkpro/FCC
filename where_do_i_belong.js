// Where do I belong
function findLowestIndex(arr, target) {
    var lowestPosition = 0;
    var len = arr.length - 1;
    for (i = 0; i <= len; i++) {
        if (arr[i] < target && arr[i + 1] >= target) lowestPosition = i + 1;
        else if (arr[i] == target) lowestPosition = i;
        else if (target > arr[len]) lowestPosition = len + 1;
    }
    return lowestPosition;
}

function getIndexToIns(arr, num) {
    var sortedArr = arr.sort(function (a, b) {
        return a - b;
    });
    var lowestPosition = findLowestIndex(sortedArr, num);
    return lowestPosition;
}

getIndexToIns([10, 20, 30, 40, 50], 30);