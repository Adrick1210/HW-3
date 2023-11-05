//----------------------------------------
// Easy Going
//----------------------------------------
for (let i = 1; i < 21; i++) {
  console.log(i);
}

//----------------------------------------
// Get Even
//----------------------------------------

for (let i = 0; i < 201; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//----------------------------------------
// Fizz Buzz
//----------------------------------------

for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//----------------------------------------
// Wild Wild Life
//----------------------------------------

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee.splice(2, 1, 5001);
console.log(plantee);
wolfy.splice(3, 1, "Gotham City");
console.log(wolfy);
dart.push("Hawkins");
console.log(dart);
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

//----------------------------------------
// Yell at the Ninja Turtles
//----------------------------------------

//----------------------------------------
// Methods Revisited
//----------------------------------------

//----------------------------------------
// Where is Waldo
//----------------------------------------

//----------------------------------------
// Excited Kitten
//----------------------------------------

//----------------------------------------
// Find the Median
//----------------------------------------
