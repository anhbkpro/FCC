// Sorted Union

function uniteUnique(arr) {
	var originalArr = arguments[0];
	var newArr = originalArr;
	for (var i = 1; i < arguments.length; i++) {
		console.log("arguments[i]="+arguments[i]);
		for (var j = 0; j < arguments[i].length; j++) {
			if(!newArr.includes(arguments[i][j]))
				newArr.push(arguments[i][j]);
		}
	}
  	return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);