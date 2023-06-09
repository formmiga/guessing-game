let maximum = parseInt(prompt("Enter the maximum number for our game."));
while (!maximum) {
  maximum = parseInt(prompt("Please, enter a valid number."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
