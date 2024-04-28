//        ..................Q24..........................
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//.................//...............
// Tests for equality and inequality with strings
const name = "Abdullah";
const name2 = "Madiha";
console.log(name === name2);
console.log(name !== name2);
//Tests using the lower case function
const mixedCaseString = "Helloworld";
console.log(mixedCaseString.toLocaleLowerCase() === "helloworld");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const number = 30;
const number2 = 15;
console.log(number === number2);
console.log(number !== number2);
console.log(number > number2);
console.log(number < number2);
console.log(number >= number2);
console.log(number <= number2);
//• Tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
//• Test whether an item is in a array
//• Test whether an item is not in a array
const fruits = ["Apple", "Mango", "Stubbery", "Banna"];
console.log(fruits);
console.log(fruits.includes("Apple"));
console.log(fruits.includes("apple"));
export {};
