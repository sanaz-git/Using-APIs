// In the previous exercise we used Promise.all() to throw five dice in one go. 
// In the current exercise we will be throwing five dice one at a time, 
// waiting for a die to settle before throwing the next one. Of course, we still consider a die rolling off the table to be a showstopper.
// To throw the dice sequentially we will be using a promise chain. Your job is to expand the given promise chain to include five dice.

const rollDice = require('./pokerDiceRoller');

function rollTheDices() {
  const results = [];
  
  // using a Promise chain to include five dice
  return rollDice(1)
    .then((value) => {
      results.push(value);
      return rollDice(2);
    })
    .then((value) => {
      results.push(value);
      return rollDice(3);
    })
    .then((value) => {
      results.push(value);
      return rollDice(4);
    })
    .then((value) => {
      results.push(value);
      return rollDice(5);
    })
    .then((value) => {
      results.push(value);
      return results;
    });
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));