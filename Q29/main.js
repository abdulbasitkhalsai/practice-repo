"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits = ["Apple", "Mango", "Banana"];
if (favoriteFruits.includes("Apple")) {
    console.log("I really like apples");
}
if (favoriteFruits.includes("Mango")) {
    console.log("I like Mangoes");
}
if (favoriteFruits.includes("Banana")) {
    console.log("I like Bananas");
}
if (favoriteFruits.includes("Orange")) {
    console.log("I don't like Oranges");
}
if (favoriteFruits.includes("Grapes")) {
    console.log("I like Grapes too");
}
