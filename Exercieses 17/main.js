//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
let guestArr = ["HINA", "SABA", "ASMA", "AFFAN", "ABDULLAH"];
//let canNotAttened:string="AFFAN";
//console.log(canNotAttened+ " "+ "can not make it, for Dinner");
//let newGuest:string="Madiha";
//guestArr[guestArr.indexOf (canNotAttened) ] =newGuest;
//console.log(guestArr);
//guestArr.map((items)=>console.log(`Dear ${items}, you are cordinally inviteed to a Dinner.`));
//guestArr.map((items)=>console.log(`Dear ${items}, I found a bigger dinner table.`));
//let guestBigning:string="Ali";
//guestArr.unshift(guestBigning);
//console.log(guestArr);
//let middleGuest="King";
//let middleIndex=guestArr.length/2
//guestArr.splice(middleIndex,0,middleGuest);
//console.log(guestArr);
//guestArr.push("Iqbal Bano")
//console.log(guestArr);
//guestArr.map((items)=>(console.log(`Dear ${items}, you are cordinally inviteed to a Dinner.`)));
console.log("I can invite only two person in a dinner");
while (guestArr.length > 2) {
    let removeGuest = guestArr.pop();
    console.log(`Dear ${removeGuest},You are not invited in a dinner`);
}
guestArr.map((items) => (console.log(`Dear ${items},Your are still invited in a dinner`)));
guestArr.pop();
console.log(guestArr);
export {};
