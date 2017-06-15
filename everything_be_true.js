// Everything Be True

function truthCheck(collection, pre) {
  	for (var i = 0; i < collection.length; i++) {
  	  console.log(collection[i]);
  		if(!collection[i].hasOwnProperty(pre)) return false;
  		else{
  		  if(!collection[i][pre]) return false;
  		}
  	}
  	return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") ;
