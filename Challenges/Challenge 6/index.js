// Coding Challenge

/* Given an array of forecasted maximum temperatures,
the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC
in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs
a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it 
up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/
const maxTempsForecasted = [12, 5, -5, 0, 4];

const printForecast = (maxTempsForecasted) => {
  let result = "";
  let i = 1;
  maxTempsForecasted.forEach((temp) => {
    result += ` ${temp}ºC in ${i} days ...`;
    i++;
  });
  console.log(result);
};

printForecast(maxTempsForecasted);
