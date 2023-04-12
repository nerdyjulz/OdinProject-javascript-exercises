//Odin Foundations: JS Fundamentals 4: Ex 7: Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

/* Formulas are:
Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9
*/


const convertToCelsius = function(x) {
  let farenNum = x;
  let celcNum = Math.round(((farenNum - 32) * (5/9))*10) / 10;
  return celcNum;
};

const convertToFahrenheit = function(y) {
  let celcNum = y;
  let farenNum = Math.round(((celcNum * (9/5)) + 32)*10) / 10;
  return farenNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
