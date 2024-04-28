"use strict";
function make_shirt(size = "large", text = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with a message: ${text}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love Coding");
