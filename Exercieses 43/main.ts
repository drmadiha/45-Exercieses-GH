//............Q43......................

//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each array to show that
// you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ['Harry Poter','Hermione Granger','Ron weasley','Albus dumbledore'];

function copyOfArray(cArray: string[]){
   return [...cArray]
}
function make_great(arraymagician: string[]){

    for(let i=0; i<arraymagician.length; i++){

        arraymagician[i] = 'The great ' + arraymagician[i];
    }
} 
function show_magicians(magician:string[]){
    magician.forEach(jadugar => {
        console.log(jadugar);
    });
} 
const copyArray = copyOfArray(magicians);

make_great(copyArray);

console.log("\nThis is my orignal Array.");
show_magicians(magicians);

console.log("\n\nThis is my modified copy of Array.");
show_magicians(copyArray);
