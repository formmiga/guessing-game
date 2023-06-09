let maximum = parseInt(prompt("Enter the maximum number for our game."));
while (!maximum) {
  maximum = parseInt(prompt("Please, enter a valid number."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "quit") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Try again.");
  } else {
    guess = prompt("Too low! Try again.");
  }
}
console.log(
  `You got it, dude ;) It just took you ${attempts} guess(es) to win. Whoop!`
);
