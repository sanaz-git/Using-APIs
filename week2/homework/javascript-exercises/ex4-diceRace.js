// 1.Complete the function rollDice() by using .map() on the dice array to create an array of promises for use with Promise.race().
// 2.Refactor the function main() using async/await and try/catch.
// 3.Once you got this working, you may observe that some dice continue rolling for some undetermined time after 
// the promise returned by Promise.race() resolves. Do you know why? Add your answer as a comment to the bottom of the file.

const rollDice = require('./pokerDiceRoller');

function rollTheDices() {

  const dices = [1, 2, 3, 4, 5];
  //  create an array of promises for use with Promise.all()
  return Promise.race(dices.map(rollDice));

}

async function main(){
    try{
        const result = await rollTheDices();
            console.log('Resolved!', results)
        }
    catch(error){
        console.log('Rejected!', error.message)
    }
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;