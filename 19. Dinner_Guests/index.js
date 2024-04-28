"use strict";
let Guest_list = ["Rija", "Wania", "Aina"];
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//   "Dear Miss. " +
//    Guest_list[i] +
//       "\n\nIt is our pleasure to invite you in our Party.\n\nThank You!\n\n"
//   );
// }
let absent_Guest = "Aina";
let new_Guest = "Waleeja";
Guest_list[0] = new_Guest;
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     "Dear Miss. " +
//       Guest_list[i] +
//       "\n\nIt is our pleasure to invite you to our Party.\n\nThank You!\n\n"
//   );
// }
// console.log(`Miss.${absent_Guest} is not coming to the Party.`);
// console.log(
//   "Good News! We found a Big Table so we are inviting 3 more Guests."
// );
//here i add 3 guest in this arry.
Guest_list.unshift("Hifza");
Guest_list.splice(2, 0, "Maryum");
Guest_list.push("Dua");
//Here i print 6 guest arry.
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     "Dear Miss. " +
//       Guest_list[i] +
//       "\n\nIt is our pleasure to invite you to our Party.\n\nThank You!\n\n"
//   );
// }
//Sorry message for guest.
// console.log(
//   "\nSorry we cannot arrange big table, Only Two people will be invited."
// );
//here i remove some guest.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    // console.log(`Sorry Miss. ${remove_Guest}, You are not invited for Dinner.`);
}
//Our remaining 2 invited guest.
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     "Dear Miss. " +
//       Guest_list[i] +
//       "\n\nYou are stil invited.\n\nThank You!\n\n"
//   );
// }
//all guest are remove from arry.
Guest_list.splice(0, 2);
console.log(Guest_list);
//Exercise no.19
//print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest are: ${Guest_list.length}`);
