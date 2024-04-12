const readline = require('readline');
const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the arena!\n");
console.log("      _______");
console.log("     //  ** /|");
console.log("    // **  / |");
console.log("   //_____/  |");
console.log("  |          |");
console.log("  |   __   |");
console.log("  |  |__|  |");
console.log("  |________|\n\n");

console.log("You're in a big fighting place with two opponents:");
console.log("Option 1. A big strong fighter with a huge axe.");
console.log("Option 2. A tricky fighter with fast knives.");

inquirer.question("Choose who you'll fight: 1 or 2: ", userChoice => {

  if (userChoice == 1) {
    console.log("You're facing the big strong fighter. Do you want to attack or defend?");
    console.log("Option 1. Attack with all your strength.");
    console.log("Option 2. Defend and wait for a chance.");

    inquirer.question("Choose your move: 1 or 2: ", userChoice => {
      if (userChoice == 1) {
        console.log("You run at the big fighter, hitting hard! You win!\n");
        console.log("You're the champion of the arena!");
      }

      if (userChoice == 2) {
        console.log("You block the big fighter's hits, waiting for your chance. But you can't win. You lose.");
      }
    });
  }

  if (userChoice == 2) {
    console.log("You're fighting the tricky fighter, ready to outsmart them. Do you want to attack or dodge?");
    console.log("Option 1. Attack quickly, aiming well.");
    console.log("Option 2. Dodge and wait for a chance to hit.");

    inquirer.question("Choose your move: 1 or 2: ", userChoice => {
      if (userChoice == 1) {
        console.log("You hit the tricky fighter fast, surprising them! You win!\n");
        console.log("You're the best fighter in the arena!");
      }
      if (userChoice == 2) {
        console.log("You dodge the tricky fighter's moves, waiting for your chance. But you can't win. You lose.");
      }
    });
  }
});
