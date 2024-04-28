//...............Q36/..............................


//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

 function  make_shirt(size : string ,  text : string){

     console.log(`Creating a ${size} shirt with a message: ${text}`);
 }
 make_shirt("Large" , "suitable for you");
 make_shirt("Medium" , "suitable for you");
 make_shirt("Small" , "suitable for you");

// ......OR............


function  makeShirt(size:string,message:string):void{
    console.log(`i am making ${size} T shirt with the message ${message}`);}
    makeShirt("Smalle","I love typescrip");
    makeShirt("Meddium","I love typescrip");
    makeShirt("Large","I love typescrip");
 
