"use strict";
// Assignment # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_Stndrdshirt(size = "Large", message = "I love Typescript") {
    console.log(`You have ordered a T-Shirt having size : ${size} with the message ${message}`);
}
make_Stndrdshirt();
make_Stndrdshirt("Medium", "I love Typescript");
make_Stndrdshirt(10, "I love Typescript");
make_Stndrdshirt(15, "Code is fine");
