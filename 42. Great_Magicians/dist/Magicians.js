"use strict";
let magicians = [
    "David Blaine",
    "Shin Lim",
    "David Copperfield",
    "Harry Houdini",
];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicians[i] = "the Great " + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
