//..........Q40....................
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, tital, tracks) {
    const album = {
        artist: artist,
        tital: tital,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return (album);
}
const artist1 = make_album('Artist No: 1', 'Tital No: 1');
console.log(artist1);
const artist2 = make_album('Artist No: 2', 'Tital No: 2');
console.log(artist2);
const artist3 = make_album('Artist No: 3', 'Tital No: 3', 12);
console.log(artist3);
export {};
//................2nd way.............
// function make_album1(artist:string,tital:string,tracks?:number):object{
//     let album: object={
//         artist: artist,
//         tital: tital,
//         tracks: tracks,
//           };
//  if(tracks){
//     album.tracks= tracks;
//  }
//  return album;
// }
// let album1=make_album1("The Beatles","Abbey Road");
// let album2=make_album1("The Queen","A Night at the Opera");
// let album3=make_album1("nerva","never mind");
// console.log(album1);
// console.log(album2);
// console.log(album3);
