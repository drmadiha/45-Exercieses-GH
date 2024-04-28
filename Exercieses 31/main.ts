//................/Q 31....................


//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.



 let userName:string[]=["Umair","Rizwana","Nida","Sadia","Zubair"];
 if (userName.length === 0) {
   console.log("We need to find some users!");
 }else{
   for(let i=0; i <userName.length;i++);
   console.log(userName);
 }


//• Remove all of the usernames from your array, and make sure the correct message is printed.


let userName1:string[]=[];
if (userName1.length === 0) {
  console.log("We need to find some users!");
}else{
  for(let i=0; i <userName1.length;i++);
  console.log(userName1);
}