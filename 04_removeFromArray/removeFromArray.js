//Odin Foundations: JS Fundamentals 4: Ex 4: Implement a function that takes an array and some other arguments then removes the other arguments from that array:

const removeFromArray = function() {
    myArray = arguments[0];
    // traverse through each extra argument
    for (let j = 1; j < arguments.length; j++){
        // traverse through the array elements for comparison
        for (let i = 0; i < myArray.length; i++){
            if (myArray[i] === arguments[j]){
                let firstHalf = myArray.slice(0,i);
                let secondHalf = myArray.slice(i+1,myArray.length);
                let newArray = firstHalf.concat(secondHalf);
                myArray = newArray;
            }
        }       
    }
    return myArray;
};

removeFromArray ([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
