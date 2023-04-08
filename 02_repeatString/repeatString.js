// Odin Project: JS Fundamentals 4: Ex 2: Write a function that simply repeats the string a given number of times:

const repeatString = function(string,num) {
    let iterations = +num;
    let myString = "";
    if (iterations < 0){
        myString = "ERROR";
        return myString;
    } else {
        for (let i = 0; i < iterations; i++){
            myString += string;
        }
        return myString;
    }
};

// Do not edit below this line
module.exports = repeatString;
