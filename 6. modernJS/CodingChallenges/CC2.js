// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ANSWERS :-----
// 1
console.log("_____OLD WAY____");

for(let i=0; i<game.scored.length; i++) {
    console.log(`Goal ${i+1}: ${game.scored[i]}`);
}
// -----or----
console.log("_____MODERN WAY____");

for(const [scoreIndex, scorePlayerNames] of game.scored.entries() ) {
    console.log(`Goal ${scoreIndex+1}: ${scorePlayerNames}`);
}

// 2
let averageSum = 0;
let counter = 0;
for(const oddValues of Object.values(game.odds) ) {
    averageSum += oddValues;
    counter++ ;
}
console.log(averageSum/counter);

// ---------or-------------

averageSum = 0;
const odd = Object.values(game.odds);

for(const od of odd) {
    averageSum += od;
}
averageSum /= odd.length;
console.log(averageSum);


//⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
// 3 "MOST IMPORTANT QN"
for(const [key,value] of Object.entries(game.odds)) {
    const result = key === 'x' ? `draw: ${value}` : `victory ${game[key]}: ${value}`;
    console.log(`odd of ${result}`);
}


// BONUS ANSWER :)
const scorers = {};
for (const player of game.scored) {
    console.log(typeof player);
    
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);    
}
console.log(scorers);
