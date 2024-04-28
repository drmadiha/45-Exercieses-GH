//               Q16
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
let guestArr = ["HINA", "SABA", "ASMA", "AFFAN", "ABDULLAH"];
let canNotAttened = "AFFAN";
console.log(canNotAttened + " " + "can not make it, for Dinner");
let newGuest = "Madiha";
guestArr[guestArr.indexOf(canNotAttened)] = newGuest;
//console.log(guestArr);
//guestArr.map((items)=>console.log(`Dear ${items}, you are cordinally inviteed to a Dinner.`));
guestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table.`));
let guestBigning = "Ali";
guestArr.unshift(guestBigning);
console.log(guestArr);
let middleGuest = "King";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
guestArr.push("Iqbal Bano");
console.log(guestArr);
guestArr.map((items) => (console.log(`Dear ${items}, you are cordinally inviteed to a Dinner.`)));
export {};
