let Guest_list: string[] = ["Rija", "Wania", "Aina"];
for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Miss. " +
      Guest_list[i] +
      "\n\nIt is our pleasure to invite you in our Party.\n\nThank You!\n\n"
  );
}
let absent_Guest: string = "Aina";
let new_Guest: string = "Waleeja";
Guest_list[0] = new_Guest;

for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Miss. " +
      Guest_list[i] +
      "\n\nIt is our pleasure to invite you in our Party.\n\nThank You!\n\n"
  );
}
console.log(`Miss.${absent_Guest} is not coming to the Party. `);
