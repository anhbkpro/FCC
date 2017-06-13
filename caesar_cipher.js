// Caesars Cipher

function rot13(str) { // LBH QVQ VG!
    var decodedStr = [];

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90)
            decodedStr.push(str.charCodeAt(i));
        else {
            if (str.charCodeAt(i) + 13 > 90) decodedStr.push(65 + (str.charCodeAt(i) + 13 - 90) - 1);
            else decodedStr.push(str.charCodeAt(i) + 13);
        }
    }
    return String.fromCharCode.apply(null, decodedStr);
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");