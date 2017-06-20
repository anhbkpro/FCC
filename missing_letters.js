// Missing letters

function fearNotLetter(str) {
  
  var arr = str.split[''];
  if(str.length ===1 ) return undefined;
  var idx = str.charCodeAt(str.length - 1);
  for(var i = str.length - 1; i >= 0; i--){
    if(idx !== str.charCodeAt(i)) return String.fromCharCode(str.charCodeAt(i) + 1);
    --idx;
  }
  return undefined;
}

fearNotLetter("abce");