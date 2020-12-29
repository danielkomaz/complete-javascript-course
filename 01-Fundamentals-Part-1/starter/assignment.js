// const country = "Austria";
// const continent = "Europe";
// let population = 8.2;
// const isIsland = false;
// const language = "German";
// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

// console.log(country);
// console.log(continent);
// console.log(population);

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// // language = "English";
// console.log(population / 2);
// console.log(population + 1);
// console.log(population > 6);
// console.log(population < 33);
// console.log(description);

// const day = "monday";

// switch (day) {
//   case "monday": {
//     console.log("Monday");
//     break;
//   }
//   case "tuesday": {
//     console.log("Tuesday");
//   }
// }

const bill = 430;
const tip = 50 < bill && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`
);
