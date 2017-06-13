// Pig Latin

function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var index = getFirstVowelPosition(vowels, str);

    if (isFirstCharVowel(vowels, str)) str = str + "way";
    else str = str.slice(index) + str.slice(0, index) + "ay";

    return str;
}

function isFirstCharVowel(arr, str) {
    if (arr.includes(str[0])) return true;
    return false;
}

function getFirstVowelPosition(arr, str) {
    var index = -1;
    for (var i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            index = i;
            break;
        }
    }
    return index;
}

translatePigLatin("consonant");