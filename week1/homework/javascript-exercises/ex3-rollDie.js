// Exercise 3: Roll a die
// This exercise is about throwing a die. A die in this exercise may roll up to 10 times before it settles on a final value, depending on the "force" with which it is thrown. Unfortunately, 
// if a die rolls more than six times in our game it rolls off the table and the throw becomes invalid. If it rolls six times or less, its final ("settled") value will be valid.
// Note: to keep things simple, we have taken some liberties in this exercise with respect to how a die behaves in reality. 
// For instance, in real life a die cannot flip back to a value it previously had. And it will mostly roll on its corners, not its sides.
// The existing rollDie() function in the exercise file uses a callback to notify the caller of success or failure. Here is the code:

function rollDice() {
    return new Promise((resolve, reject) => {
  
      // Compute a random number of rolls (3-10) that the dice MUST complete
      const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
      console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);
    
      const rollOnce = (roll) => {
        // Compute a random dice value for the current roll
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(`Dice value is now: ${value}`);
    
        // Use callback to notify that the dice rolled off the table after 6 rolls
        if (roll > 6) {
          reject(new Error('Oops... Dice rolled off the table.'));
        }
    
        // Use callback to communicate the final dice value once finished rolling
        if (roll === randomRollsToDo) {
          resolve(value);
        }
    
        // Schedule the next roll todo until no more rolls to do
        if (roll < randomRollsToDo) {
          setTimeout(() => rollOnce(roll + 1), 500);
        }
      };
    
      // Start the initial roll
      rollOnce(1);
    })
  }
  
  rollDice()
    .then(value => console.log(`Success! Dice settled on ${value}.`))
    .catch(error => console.log(error.message));