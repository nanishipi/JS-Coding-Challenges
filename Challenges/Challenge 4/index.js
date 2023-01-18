const billValue = 275;
let tip;

console.log(`Bill Value is ${billValue},
The tip value is ${tip = 350 >= billValue && billValue >= 50 ? billValue * 0.15 : billValue * 0.20}
Total Value is ${billValue + tip}`)