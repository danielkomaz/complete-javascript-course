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
