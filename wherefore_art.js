// Wherefore art thou

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  var values = Object.values(source);
  
  var sourceKey = Object.keys(source)[0];
  var sourceValue = Object.values(source)[0];
  var obj;
  var isExist = false;
  for(i = 0; i < collection.length; i++){
    obj = collection[i];
    
    for(j = 0; j < keys.length; j++){
      if(Object.keys(obj).length >= Object.keys(keys).length && obj.hasOwnProperty(keys[j]) &&  obj[keys[j]] === values[j] && !arr.includes(obj)){
        console.log("i=" + i + ", j=" + j + "  --->  obj[keys[j]]:" +  obj[keys[j]]);
        if(j == keys.length - 1){
          isExist = true;
        }
      }else{
        isExist = false;
        continue;
      }
    }
    if(isExist) arr.push(obj);
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 3 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

/*whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });*/
