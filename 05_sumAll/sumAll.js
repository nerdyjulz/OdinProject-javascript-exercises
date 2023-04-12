//Odin Foundations: JS Fundamentals 4: Ex 5: Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

const sumAll = function(x ,y) {
    let sum = 0;
    let lowNum = 0;
    let highNum = 0;
    //check for negative numbers
    if (x < 0 || y < 0) { 
        return ("ERROR");
    //check for non-number types
    } else if (((typeof x) != "number") || ((typeof y) != "number")){
        return ("ERROR");
    //otherwise sum the numbers
    } else {
        if (x > y){
            highNum = x;
            lowNum = y;
        } else {
            lowNum = x;
            highNum = y;
        }
        for (let i=lowNum; i <= highNum; i++){
            sum += i;
        }
        return sum;
    }   
};

// Do not edit below this line
module.exports = sumAll;
