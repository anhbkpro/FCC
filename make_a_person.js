// Make a Person

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };


    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(val) {
        fullName = val + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(val) {
        fullName = fullName.split(" ")[0] + " " + val;
    };

    this.setFullName = function(val) {
        fullName = val;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();