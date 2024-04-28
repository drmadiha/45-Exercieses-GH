//.............37q...........
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//............one way.........
function largeShirt(size = 'Large', text = 'I Love Typescript !') {
    console.log(`Creating a ${size} shirt with message: ${text}`);
}
largeShirt();
largeShirt('Medium');
largeShirt('Small', 'I Love Python!');
//.............or............
function make_shirt(size = "L", message = "I love typescript!") {
    console.log(`i make a ${size} T.shirt with the message ${message}.`);
}
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "I am a programeer");
export {};
