// Spinal Tap Case
// This is my solution
function spinalCase(str) {
  var regex = /[A-Z]/g;
  
  var newStr = str.replace(/ /g, '-').replace(regex, function(value){
    return "-" + value.toLowerCase();
  }).replace(/_/g, '').replace(/--/g, '-');
  
  if(newStr.charAt(0) === '-') newStr = newStr.substr(1);
  return newStr;
}

// This is Advanced Code Solution
function betterSpinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

spinalCase('Teletubbies say Eh-oh');
