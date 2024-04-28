"use strict";
let Guest_list = ["Rija", "Wania", "Aina"];
for (let i = 0; i < Guest_list.length; i++) {
    console.log("Dear Miss. " +
        Guest_list[i] +
        "\n\nIt is our pleasure to invite you in our Party.\n\nThank You!\n\n");
}
let absent_Guest = "Aina";
let new_Guest = "Waleeja";
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log("Dear Miss. " +
        Guest_list[i] +
        "\n\nIt is our pleasure to invite you in our Party.\n\nThank You!\n\n");
}
console.log(`Miss.${absent_Guest} is not coming to the Party. `);
