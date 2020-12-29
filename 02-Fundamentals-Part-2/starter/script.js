"use strict";

////////////////////////////////////////////////////////
// Coding Challenge #1

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
//
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
//
// function checkWinner(scoreDolphins, scoreKoalas) {
//   scoreDolphins >= scoreKoalas * 2
// ? console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`)
// : scoreDolphins * 2 <= scoreKoalas
// ? console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`)
// : console.log(`No team wins`);
// }
//
// checkWinner(avgDolphins, avgKoalas);
//

////////////////////////////////////////////////////////
// Coding Challenge #2

// const calcTip = (bill) =>
//   50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(totals);

/*
const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

john.calcBMI() > mark.calcBMI() ? console.log(`${john.fullName}´s BMI (${john.bmi}) is higher than ${mark.fullName}´s (${mark.bmi})!`) : console.log(`${mark.fullName}´s BMI (${mark.bmi}) is higher than ${john.fullName}´s (${john.bmi})!`)
*/

// Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(
    `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`
  );
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
