"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("mofe.", "prince of egypt");
console.log(album1);
const album2 = make_album("The Weeknd", "Die for you");
console.log(album2);
const album3 = make_album("Fujii Kaze", "Shinunoga E-Wa");
console.log(album3);
