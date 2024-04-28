//..........Q40....................
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, tital, tracks) {
    var album = {
        artist: artist,
        tital: tital,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return (album);
}
var artist1 = make_album('Artist No: 1', 'Tital No: 1');
console.log(artist1);
var artist2 = make_album('Artist No: 2', 'Tital No: 2');
console.log(artist2);
var artist3 = make_album('Artist No: 3', 'Tital No: 3', 12);
console.log(artist3);
