"use strict";
// // Assignment # 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// Solution # 1
let currentUsers = ["Ali", "Junaid", "Shoaib", "Jameel", "Nadeem"];
let newUser = ["Jamshed", "ALI", "Saleem", "jameel", "Kaleem"];
let lowerCaseUsers = currentUsers.map((user) => user.toLowerCase());
for (let user of newUser) {
    if (lowerCaseUsers.includes(user.toLowerCase())) {
        console.log(`${user} is already taken, please choose another username`);
    }
    else {
        console.log(`${user} is available`);
    }
}
// Solution # 2
let current_users = ["user1", "ADmin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
        console.log(current_users);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
