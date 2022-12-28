let numberOne = 10,
  numberTwo = 20;

let templateLiterals = `${numberOne.toString() + numberTwo.toString()}`;
  

// Ouput
console.log(numberOne.toString() + numberTwo.toString()); // Normal Concatenate => 1020
console.log(typeof (numberOne.toString() + numberTwo.toString())); // Normal Concatenate => String
console.log(templateLiterals); // Template Literals Way => 1020
console.log(typeof(`${numberOne.toString() + numberTwo.toString()}`)); // Template Literals Way => String

console.log(numberTwo.toString() + "\n" + numberOne.toString());
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/