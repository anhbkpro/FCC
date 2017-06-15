// Arguments Optional

function addTogether(x) {
  
	if (arguments.length > 1) {
		if(arguments[0] && arguments[1] && typeof arguments[0] === "number" && typeof arguments[1] === "number")
			return arguments[0] + arguments[1];
		else
			return undefined;
	}
    
   if(arguments.length === 1){
     
     if(typeof arguments[0] != "number"){
       return undefined;
     }
     
     return function (y) {
        if((typeof y !== "number"))
        return undefined;
	  	return x + y;
	};
   }
	
}

addTogether(2)([3]);