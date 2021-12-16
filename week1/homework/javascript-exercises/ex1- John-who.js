// Exercise 1: John who?
// Rewrite this function, but replace the callback syntax with the Promise syntax:
// Have the getAnonName arrow function return a new Promise.
// If the Promise resolves, pass the full name as an argument to resolve().
// If the Promise rejects, pass an Error object containing "You didn't pass in a first name!" to reject().

// const getAnonName = (firstName, callback) => {
//     setTimeout(() => {
//       if (!firstName) {
//         callback(new Error("You didn't pass in a first name!"));
//         return;
//       }

//       const fullName = `${firstName} Doe`;

//       callback(fullName);
//     }, 1000);
//   };

//   getAnonName('John', console.log);

//   rewrite with Promise

const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName) {
        resolve(`${firstName} Doe`);
      } else {
        reject("You didn't pass in a first name!");
      }
    }, 1000);
  });
};

getAnonName("John").then(console.log);
