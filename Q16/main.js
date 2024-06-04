"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  Print a new set of invitation messages, one for each person in your list.
let guestList = ["Jameel", "Naseem", "Kaleem"];
guestList.unshift("Faizan");
guestList.splice(2, 0, "Saqib");
guestList.push("Salman");
guestList.forEach(guest => {
    console.log(`Mr. ${guest}, You are invited to join us dinner today`);
});
