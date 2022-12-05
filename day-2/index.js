import fs from 'fs'

const moves = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
}

const movesInput = {
  'A' : moves.Rock,
  'B' : moves.Paper,
  'C' : moves.Scissors,
  'X' : moves.Rock,
  'Y' : moves.Paper,
  'Z' : moves.Scissors
}

const plays = {
  'A': {
    'X': moves.Paper,
    'Y': moves.Rock,
    'Z': moves.Scissors
  },
  'B': {
    'X': moves.Scissors,
    'Y': moves.Paper,
    'Z': moves.Rock,
  },
  'C': {
    'X': moves.Rock,
    'Y': moves.Scissors,
    'Z': moves.Paper,
  }
}

const matchOutcome = {
  win: 6,
  draw: 3,
  loss: 0
}

const getMatchResult = (elfPlay, playerPlay, scoreboard) => {

  if (elfPlay === playerPlay) {
    scoreboard.elfScore = scoreboard.elfScore + movesInput[elfPlay] + matchOutcome.draw;
    scoreboard.playerScore = scoreboard.playerScore + movesInput[playerPlay] + matchOutcome.draw;
    return;
  }

  if ((elfPlay === 'Rock' && playerPlay === 'Scissors') || 
      (elfPlay === 'Paper' && playerPlay === 'Rock') || 
      (elfPlay === 'Scissors' && playerPlay === 'Paper')) {
    scoreboard.elfScore = scoreboard.elfScore +movesInput[elfPlay] + matchOutcome.win;
    scoreboard.playerScore = scoreboard.playerScore +movesInput[playerPlay] + matchOutcome.loss;
    return;
  }

  scoreboard.elfScore = scoreboard.elfScore +movesInput[elfPlay] + matchOutcome.loss;
  scoreboard.playerScore = scoreboard.playerScore +movesInput[playerPlay] + matchOutcome.win;
}


const input = fs.readFileSync('day2.txt', (err, data) => {
  const input = String(data).replace(/(\r\n|\n|\r)/gm, ' ').replace(/(\s)/g, ',');
  const matchArray = String(input).split(',');
  console.log(matchArray)
  return matchArray
});

const part1Results = (input) => {
  console.log(input);
  let elfPlays = input.filter(e => e === 'A' || e === 'B' || e === 'C');
  let playerPlays = input.filter(e => e === 'X' || e === 'Y' || e === 'Z');

  let scoreboard = {
    elfScore : 0,
    playerScore: 0,
  }

  for(let i = 0 ; i < elfPlays.length ; i++) {  
    getMatchResult(elfPlays[i], playerPlays[i], scoreboard);
  }

  console.log(scoreboard);
}

part1Results(input);


// import { readFileSync } from "node:fs";

// const lines = readFileSync("day2.txt", { encoding: "utf-8" }) // read day??.txt content
//   .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
//   .trim() // Remove starting/ending whitespace
//   .split("\n") // Split on newline
//   .map((line) => line.split(" ")); // Parse each line into a number

// const moves = {
//   rock: 1,
//   paper: 2,
//   scissors: 3,
// };

// const mapInput = {
//   A: moves.rock,
//   B: moves.paper,
//   C: moves.scissors,
//   X: moves.rock,
//   Y: moves.paper,
//   Z: moves.scissors,
// };

// function score(opponentMove, ourMove) {
//   if (opponentMove === ourMove) {
//     return ourMove + 3;
//   }
//   if (
//     (opponentMove === moves.rock && ourMove === moves.paper) ||
//     (opponentMove === moves.paper && ourMove === moves.scissors) ||
//     (opponentMove === moves.scissors && ourMove === moves.rock)
//   ) {
//     // We win
//     return ourMove + 6;
//   }
//   // We lost
//   return ourMove;
// }

// function part1() {
//   const outcomes = lines.map((line) => {
//     const opponentMove = mapInput[line[0]];
//     const ourMove = mapInput[line[1]];
//     return score(opponentMove, ourMove);
//   });
//   console.log(outcomes.reduce((a, b) => a + b, 0));
// }

// const solution = {
//   A: {
//     //rock
//     X: moves.scissors, //lose
//     Y: moves.rock, //draw
//     Z: moves.paper, //win
//   },
//   B: {
//     //paper
//     X: moves.rock,
//     Y: moves.paper,
//     Z: moves.scissors,
//   },
//   C: {
//     //scissors
//     X: moves.paper,
//     Y: moves.scissors,
//     Z: moves.rock,
//   },
// };

// function part2() {
//   const outcomes = lines.map((line) => {
//     const opponentMove = mapInput[line[0]];

//     // Guess our move from the instructions
//     const ourMove = solution[line[0]][line[1]];

//     return score(opponentMove, ourMove);
//   });
//   console.log(outcomes.reduce((a, b) => a + b, 0));
// }

// part1();
// part2();