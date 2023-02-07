"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let highestTemp = temperatures[0];
let lowestTemp = temperatures[0];

temperatures.forEach((temperature) => {
  if (temperature == "error") {
    console.log("skipped");
  } else {
    if (temperature <= lowestTemp) {
      lowestTemp = temperature;
    } else if (temperature >= highestTemp) {
      highestTemp = temperature;
    }
  }
});

console.log(highestTemp);
console.log(lowestTemp);
