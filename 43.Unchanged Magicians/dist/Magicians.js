"use strict";
let magicians = [
    "David Blaine",
    "Shin Lim",
    "David Copperfield",
    "Harry Houdini",
];
function coppyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "the Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
const copyMagicianArray = coppyArray(magicians);
make_great(copyMagicianArray);
console.log("\n\nThis is my original Array:");
show_magicians(magicians);
console.log("\n\nThis is my modified copy of the Array:");
show_magicians(copyMagicianArray);
