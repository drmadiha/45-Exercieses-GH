//........44Q............

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should 
//print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.


function make_sandwich(items: string[]){
    console.log('\nMaking your sandwich with:');


items.forEach(element => console.log('- ' + element));

console.log('Enjoy your sandwich !');

}
make_sandwich(['Hum','Chease','lettuce']);
make_sandwich(['Turkey','Bacon']);
make_sandwich(['Peanut Butter','Jelly']);