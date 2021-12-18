// Exercise 3: Roll a die
// This exercise is about throwing a die. A die in this exercise may roll up to 10 times before it settles on a final value, depending on the "force" with which it is thrown. Unfortunately, 
// if a die rolls more than six times in our game it rolls off the table and the throw becomes invalid. If it rolls six times or less, its final ("settled") value will be valid.
// Note: to keep things simple, we have taken some liberties in this exercise with respect to how a die behaves in reality. 
// For instance, in real life a die cannot flip back to a value it previously had. And it will mostly roll on its corners, not its sides.
// The existing rollDie() function in the exercise file uses a callback to notify the caller of success or failure. Here is the code:

function rollDie(callback) {
    // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);
  
    const rollOnce = (roll) => {
      // Compute a random die value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);
  
      // Use callback to notify that the die rolled off the table after 6 rolls
      if (roll > 6) {
        // TODO replace "error" callback
        callback(new Error('Oops... Die rolled off the table.'));
      }
  
      // Use callback to communicate the final die value once finished rolling
      if (roll === randomRollsToDo) {
        // TODO replace "success" callback
        callback(null, value);
      }
  
      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };
  
    // Start the initial roll
    rollOnce(1);
  }
  
  function main() {
    // TODO Refactor to use promise
    rollDie((error, value) => {
      if (error !== null) {
        console.log(error.message);
      } else {
        console.log(`Success! Die settled on ${value}.`);
      }
    });
  }