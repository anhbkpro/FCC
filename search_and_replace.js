// Search and Replace

function myReplace(str, before, after) {
    var separator = ' ';
    var indexes = [];
    var arr = str.split(separator);

    var isUppercase = before[0] === before[0].toUpperCase();
    if (isUppercase) after = capitalizeFirstLetter(after);

    searchWord(arr, indexes, before);

    replaceWord(arr, indexes, after);

    return generateString(arr);
}

function generateString(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    return str.trim();
}

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function searchWord(arr, indexes, before) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === before) { indexes.push(i); }
    }
}

function replaceWord(arr, indexes, word) {
    var removed = [];
    for (i = 0; i < indexes.length; i++) {
        removed = arr.splice(indexes[i], 1, word);
    }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
