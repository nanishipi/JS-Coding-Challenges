const weightJohn = 85;
const weightMark = 85;

const heightJohn = 1.76;
const heightMark = 1.76;

const johnBMI = weightJohn / (heightJohn ** 2);

const markBMI = weightMark / (heightMark ** 2);

if (johnBMI > markBMI) {
    console.log("John has higher BMI");
} else if (markBMI > johnBMI) {
    console.log("Mark has higher BMI");
} else {
    console.log("They have the same BMI");
}