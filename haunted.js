const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 10,
  charm: 0,
  weapon: "longsword",
  item: "torch",
};

console.log();
console.log("*** WELCOME TO A GAME OF THRONES ***");
player.name = READLINE.question("What is your name?:    Stark");
console.log(`${player.name} stands in formation in front of a mighty Lannister Castle .`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++10;
  console.log(`${player.name} prepares their ${player.weapon} and  charges the castle ...`);
  console
  // continue the story

} else {
  player.courage--10;
  console.log(`${player.name} decides not to charge with the rest of the army. You are a deserter, and the rearguard sees you run the opposite way. They follow the rules, and rain arrows down on you. YOU HAVE DIED`);
  // continue the story

}
console.log("Thanks for playing!");
