// Diff Two Arrays

function diffArray(arr1, arr2) {

	function isRemoveElement1(val) {
	if(!arr2.includes(val)) 
		return true;
	else
		return false;
	}

	function isRemoveElement2(val) {
		if(!arr1.includes(val)) 
			return true;
		else
			return false;
	}

	var newArr = [];
	if (arr1.length === 0 && arr2.length > 0) return arr2;
	if (arr2.length === 0 && arr1.length > 0) return arr1;
	  
	var filteredArr1 = arr1.filter(isRemoveElement1);
	var filteredArr2 = arr2.filter(isRemoveElement2);
	  
	newArr = filteredArr1.concat(filteredArr2);

	return newArr;
}



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
