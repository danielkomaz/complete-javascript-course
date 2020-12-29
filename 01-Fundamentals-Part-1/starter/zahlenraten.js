const max = 100;
const min = 1;
let computer;
let versuche;

console.log("Ein herzliches Willkommen zum Zahlenraten");

let wiederholen = 1;
do {
  if (wiederholen === 1) {
    computer = Math.floor(Math.random() * max + min);
    versuche = 0;
  } else {
    break;
  }

  let spieler = 0;
  do {
    spieler = Number(prompt("Geben Sie eine Zahl zwischen 1 und 100 ein"));

    do {
      if (spieler < 1 || spieler > 100)
        console.log("Zahl ist nicht im Bereich!");
    } while (spieler < 1 || spieler > 100);
    versuche += 1;

    if (spieler < computer) {
      console.log(
        `Das war der ${versuche}-te. Rateversuch - die Zahl ist zu klein!`
      );
    } else if (spieler > computer) {
      console.log(
        `Das war der ${versuche}-te. Rateversuch - die Zahl ist zu gross!`
      );
    } else if (spieler === computer) {
      console.log(
        `Das war der ${versuche}-te. Rateversuch - Sie haben es geschafft - Bravo!`
      );
    }
  } while (spieler !== computer);

  wiederholen = Number(prompt("Nochmal raten – Eingabe 1"));
  computer = 0;
} while (computer === 0);

console.log("Bis bald!");
