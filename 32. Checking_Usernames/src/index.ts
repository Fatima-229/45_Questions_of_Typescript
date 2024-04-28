let current_users: string[] = ["FatIma", "RiJa", "AiNa", "Wania", "John"];

let new_users: string[] = ["Dua", "Waleeja", "FatIma", "Insha", "Wania"];

new_users.forEach((newUsername) => {
  let lowerCase: string = newUsername.toLowerCase();

  if (current_users.map((c_user) => c_user.toLowerCase()).includes(lowerCase)) {
    console.log(
      `The username ${newUsername} is not available. Please write a different username`
    );
  } else {
    console.log(`The username ${newUsername} is available.`);
  }
});
