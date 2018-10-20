// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)
let x = READLINE.question("What do you want change for?")
let inputCents = x;
let quaters = Math.floor(inputCents/25);
let Qremainder = inputCents%25;
let dimes = Math.floor(Qremainder/10);
let Dremainder = (Qremainder%10);
let nickels = Math.floor(Dremainder/5);
let Nremainder = (Dremainder%5);
let pennies = (Nremainder/1); 











 const changeMachine = {
	inputCents: x,
	quaters: quaters,
	dimes: dimes,
	nickels: nickels,
	pennies: pennies,
	greeting: "I'm a change machine gimme your money",
	farwell: "Ok I'm done next guy" 
};
// write code below that simulates the change machine in action!
console.log(`${changeMachine.greeting}
	QUATERS: ${changeMachine.quaters}
	DIMES: ${changeMachine.dimes}
	NICKELS: ${changeMachine.nickels}
	PENNIES: ${changeMachine.pennies}
${changeMachine.farwell}
	`);






