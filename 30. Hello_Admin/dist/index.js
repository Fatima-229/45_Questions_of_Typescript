"use strict";
const userNames = ["admin", "Rija", "Aina", "Wania", "Waleeja"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames[i]}, would you like to see a status report?`);
    }
}
