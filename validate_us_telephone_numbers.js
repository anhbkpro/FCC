// Validate US Telephone Numbers

function telephoneCheck(str) {
    var newStr = str.replace(/\s|\-|\(|\)/g, '').split('').join('').trim();
    var entity = str.replace(/\d|\-/g, '').split('').join('').trim();
  
    if((str[0] == '(' && str[str.length - 1] == ')') || str[0] == '-' || (newStr.length === 11 && newStr[0] != 1)) {
      //console.log("1:" + newStr + entity);
      return false;
    }
    if(newStr.length < 10 || newStr.length > 11) {
      //console.log("2:" + newStr + entity);
      return false;
    }
    if(!parenthesesAreBalanced(entity)) {
      //console.log("3:" + newStr + entity);
      return false;
    }
  	return true;
}

function parenthesesAreBalanced(str) {
  console.log("str=" + str);
  var parentheses = "[]{}()", stack = [], i, character, bracePosition;

  for(i = 0; i < str.length; i++) {
    character = str[i];
    bracePosition = parentheses.indexOf(character);
    console.log("str[" + i + "]=" + str[i]);
    console.log("bracePosition=" + bracePosition);
    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.pop() !== bracePosition) {
        return false;
      }
    }
    
    console.log("stack[" + i + "]=" + stack);
  }
  
  console.log("stack[final]=" + stack);
  return stack.length === 0;
}

telephoneCheck("1 (555) 555-5555");