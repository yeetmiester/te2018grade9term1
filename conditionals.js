const READLINE = require("readline-sync");

let howWasYourDay = READLINE.question("How was your day? (Answer Good or Bad) "); 
if(howWasYourDay = 'Good') {
	console.log("Thats good.");
}

else {
	console.log("Oh I'm sorry.");
}

let didYouLearnAnythingNwToday = READLINE.question("Did you learn anything new today? (Answer Yes or No) ");
if(didYouLearnAnythingNwToday = 'Yes') {
	console.log("Ok great!");
}
if(didYouLearnAnythingNwToday = 'No') {
	console.log("Oh, ok.");
}

let didYouGetAnyHomework = READLINE.question("Did you get any homework? (Answer Yes or No)  ");
if(didYouGetAnyHomework = 'Yes') {
	console.log("Ok.");
}
if(didYouGetAnyHomework =  'No') {
console.log("Yeah you do, your teacher emailed me.");

} 

let didYouDit = READLINE.question("Did you do it? (Answer Yes or No)  ");
if(didYouDit = 'Yes') {
	console.log("Ok good job");
}
if(didYouDit = 'No') {
	console.log("Get on that. (You do all of your homework)");
}










































let wantsToDrink = READLINE.question("You're at a party and somone offers you a beer. Do you want it? Type Y/N: ");

if(wantsToDrink == 'N') {
	console.log("Ok, see you around");
}
if(wantsToDrink == 'Y') {
	let age = READLINE.question("Please enter your age: ");
	if(age >= 21) {
		console.log("You can have some. Here.");
	}
	else {
		console.log("I'm sorry. It's illegal to drink alcohol if your under 21.");	
	}
}

// **** Problem 1: R-rated ****
// You cannot see an R-rated movie unless you are at least 18, or you are with
// an adult. Write code that prints whether or not someone can see an
// R-rated movie.
console.log("*** Problem 1: R-rated ***");
let age = READLINE.question("Enter your age: ");
let withAdult = READLINE.question("Are you with an adult? (yes or no): ");
if(age >= 18 || withAdult == 'yes') {
	console.log("Ok you can head in theater 3.");
}
else {
	console.log("Sorry, you cant see that movie.");
}

if(age < 18 && withAdult == 'yes') {
	console.log("Sorry, you cant see that movie.");
}


// **** Problem 2: Umbrella ****
// You should bring an umbrella when you travel, but only if it is raining.
// However, if it is thunderstorming, you should not bring an umbrella since
// that's bad luck. Write code that prints if someone should bring an umbrella
// with them.
console.log("*** Problem 2: Umbrella ***");
let raining = READLINE.question("Is it raining? (yes or no): ");
let thunderstorming = READLINE.question("Is it thunderstorming? (yes or no): ");
if(raining == 'yes') {
	console.log("You should bring an umbrella.");
}
if (raining == 'no') {
	console.log("No need for an umbrella today");
}

if (thunderstorming == 'no') {
	console.log("If its raining, bring an umbrella.")
}

if(thunderstorming == 'yes') {
	console.log("Dont bring an umbrella, you could get electrified.");
}

if (raining == 'no' && thunderstorming == 'no') {
}


// **** Problem 3: Monkey Trouble ****
// There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// them are smiling, or if neither are smiling. Write code that prints if we
// are in trouble.
console.log("*** Problem 3: Monkey Trouble ***");
let bubbles = READLINE.question("Is Bubbles smiling? (yes or no): ");
let spankey = READLINE.question("Is Spankey smiling? (yes or no): ");

if(bubbles == 'yes') {
	console.log("It's happy for now");
}

if(bubbles == 'no') {
	console.log("Back off guy!");
}

if(spankey == 'yes') {
	console.log("Ha yeet!");
}

if(spankey == 'no') {
	console.log("Dat boi is hella mad fam");
}

if(spankey == 'yes' && bubbles == 'yes') {
	console.log("They seem calm");
}

if(spankey == 'no' && bubbles == 'no') {
	console.log("They will rip out your intestines and feed them to you, back away slowly.");
}




// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
console.log("*** Problem 4: First Place ***");
let score1 = READLINE.question("Enter the first score: ");
let score2 = READLINE.question("Enter the second score: ");
let score3 = READLINE.question("Enter the third score: ");

if(score1 > score2 && score3) {
	console.log("Player 1 Wins");
}

if(score2 > score1 && score3) {
	console.log("Player 2 Wins");
}

if(score3 > score1 && score2) {
	console.log("Player 3 Wins");
}


// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = READLINE.question("How much money do you have?: ");

if(money < 30) {
	console.log("Sorry you cant buy anything because your poor lol noob")
}

if(money >= 30) {
	console.log("You can buy a prepaid phone");
}

if(money >= 100) {
	console.log("You can buy a prepaid phone or a bottom-tier phone");
}

if(money >= 300 ) {
	console.log("You can buy 10 prepaid phones, 3 bottom-tier phone or a middle-tier phone");
}

if(money >= 600) {
	console.log("You can buy 20 prepaid phones, 6 bottom-tier phones, 2 middle-tier phones or a top tier phone");
}

if(money >= 1030) {
	console.log("You can buy one of every phone");
}


// **** Problem 6: Guess My Number ****
// Write code that plays a simple number guessing game with a user. You can
// use any number you like as myNum. If the user guesses the number, print
// a congratulations message. If they guess too low or too high, tell them this.
// If their guess is myNum +/- 3, tell them they are "warm"; otherwise tell
// them they are cold.
console.log("*** Problem 6: Guess My Number ***");
let myNum = 5;
let guess = READLINE.question("I'm thinking of a number between 1 and 10. Guess it: ");

if(guess == myNum) {
	console.log("You guessed the right number, goodjob.");
}

if(guess > myNum) {
	console.log("You guessed wrong, looser");
}

if(guess < myNum) {
	console.log("You guessed wrong, looser");
}




































