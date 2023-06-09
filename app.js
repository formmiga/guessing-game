let maximum = parseInt(prompt("Enter the maximum number for our game."));
while (!maximum) {
  maximum = parseInt(prompt("Please, enter a valid number."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Too high! Try again."));
  } else {
    guess = parseInt(prompt("Too low! Try again."));
  }
}
console.log(
  `You got it, dude ;) It just took you ${attempts} guess(es) to win. Whoop!`
);
