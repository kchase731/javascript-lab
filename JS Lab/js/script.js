let game = prompt("Do you want to play a game?");
let playerName = "John";
//let game = "Yes";

if (game === "Yes") {
  played = "Yes";
} else {
  played = "no";
}

if (played === "Yes") {
   playerName = prompt("What is your name?");
  //playerName = 'John';
} else {
  playerName = "Did not Play";
}

let grantHP = 10;
let playerHP = 40;
// let grantPoints = 0;
// let playerPoint =0;

function playGame(grantHP, playerHP) {
  while (grantHP > 0 && playerHP > 0) {
    grantHP = grantHP - getRand(1, 2);
    playerHP = playerHP - getRand(1, 2);

    console.log(grantHP, playerHP);
  }

  if (grantHP <= 0 && playerHP > 0) {
    console.log(`${playerName} Wins`);
  } else if (playerHP <= 0 && grantHP > 0) {
    console.log(`${playerName} Wins`);
  }
}

playGame(grantHP, playerHP);

// console.log(grantHealth, playerHealth);

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
