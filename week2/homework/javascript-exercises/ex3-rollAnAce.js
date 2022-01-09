// 1.Run the unmodified exercise and observe that it works as advertised. 
// Observe that the die must be thrown an indeterminate number of times until we get an ACE or until it rolls off the table.
// 2.Now, rewrite the body of the rollDiceUntil() function using async/await and without using recursion. Hint: a while loop may come handy.
// Note: Your solution should no longer use recursion (i.e. the function should not call itself).
// 3.Refactor the function main() to use async/await and try/catch.

const rollDice = require('./pokerDiceRoller');

async function rollDiceUntil(wantedValue) {
  // TODO: rewrite this function using async/await
  const value = await rollDice();
  while (value !== wantedValue) {
    await rollDice();
  }
  return value;
}


// TODO refactor this function to use try/catch
async function main() {
  try {
    const results = await rollDiceUntil('ACE');
    console.log('Resolved!', results)
  }
  catch(error) {
    console.log('Rejected!', error.message)
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollDiceUntil; 