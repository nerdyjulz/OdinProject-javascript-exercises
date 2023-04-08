 //Odin Fundamentals JS 4: Ex 3: Pretty simple, write a function called `reverseString` that returns its input, reversed!
 
 reverseString = function(userString) {
    let string = userString;
    let revString = "";
    for (let i = 0; i < string.length; i++){
        revString += string.charAt((string.length-1)-i);
    }
    return revString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
