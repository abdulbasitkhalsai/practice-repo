// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
var friendlist = ["Faizan", "Salman", "Saqib"];
for (var _i = 0, friendlist_1 = friendlist; _i < friendlist_1.length; _i++) {
    var friend = friendlist_1[_i];
    console.log("Dear ".concat(friend, ", would you like to learn some typescript todays?"));
}
;
