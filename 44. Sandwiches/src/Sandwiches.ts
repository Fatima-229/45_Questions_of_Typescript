function makeSandwich(item: string[]) {
  console.log("\nMake your Sandwich with: ");
  item.forEach((element) => console.log("- " + element));
  console.log("Enjoy your Sandwich!\n");
}

makeSandwich(["Mayo", "Boilled egg"]);

makeSandwich(["Chicken", "Cheese", "Lettuce"]);

makeSandwich(["Peanut butter", "Jelly"]);
