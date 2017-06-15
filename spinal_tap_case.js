// Spinal Tap Case

function spinalCase(str) {
  var regex = /[A-Z]/g;
  
  var newStr = str.replace(/ /g, '-').replace(regex, function(value){
    return "-" + value.toLowerCase();
  }).replace(/_/g, '').replace(/--/g, '-');
  
  if(newStr.charAt(0) === '-') newStr = newStr.substr(1);
  return newStr;
}

spinalCase('Teletubbies say Eh-oh');
