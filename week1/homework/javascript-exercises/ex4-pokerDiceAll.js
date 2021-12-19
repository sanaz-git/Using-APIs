// Refactor the rollDice() function to throw five dice in one go, 
// by using .map() on the dice array to create an array of promises for use with Promise.all().
const rollDice = require('./pokerDiceRoller');

function rollTheDices() {

  const dices = [1, 2, 3, 4, 5];
  //  create an array of promises for use with Promise.all()
  return Promise.all(dices.map(dice => rollDice(dice)));

}

rollTheDices()
  .then(results => console.log('Resolved!', results))
  .catch(error => console.log('Rejected!', error.message));  