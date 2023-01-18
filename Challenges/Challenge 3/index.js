const dolphinsMember1 = 97;
const dolphinsMember2 = 112;
const dolphinsMember3 = 101;

const koalasMember1 = 109;
const koalasMember2 = 95;
const koalasMember3 = 123;

const dolphinsAVG = (dolphinsMember1 + dolphinsMember2 + dolphinsMember3) / 3;
const koalasAVG = (koalasMember1 + koalasMember2 + koalasMember3) / 3;

if (dolphinsAVG < 100 || koalasAVG < 100) {
    console.log("One of the teams does't meet the 100 AVG requirement.")
} else if (dolphinsAVG > koalasAVG) {
    console.log(`Dolphins Team Wins with an average of ${dolphinsAVG} point`);
} else if (dolphinsAVG < koalasAVG) {
    console.log(`Koalas Team Wins with an average of ${koalasAVG} point`);
} else {
    console.log(`Koalas Team and Dolphins Team have the same average of points, so it is a draw!`);
}