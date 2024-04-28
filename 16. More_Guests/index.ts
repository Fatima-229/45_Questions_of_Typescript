let Guest_list: string[] = ["Rija", "Wania", "Aina"];
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//   "Dear Miss. " +
//    Guest_list[i] +
//       "\n\nIt is our pleasure to invite you in our Party.\n\nThank You!\n\n"
//   );
// }
let absent_Guest: string = "Aina";
let new_Guest: string = "Waleeja";
Guest_list[0] = new_Guest;

for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Miss. " +
      Guest_list[i] +
      "\n\nIt is our pleasure to invite you to our Party.\n\nThank You!\n\n"
  );
}
console.log(`Miss.${absent_Guest} is not coming to the Party.`);
console.log(
  "Good News! We found a Big Table so we are inviting 3 more Guests."
);
Guest_list.unshift("Hifza");
Guest_list.splice(2, 0, "Maryum");
Guest_list.push("Dua");
for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Miss. " +
      Guest_list[i] +
      "\n\nIt is our pleasure to invite you to our Party.\n\nThank You!\n\n"
  );
}
