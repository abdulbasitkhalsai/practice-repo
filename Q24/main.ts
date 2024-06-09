// Assignment # 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let age = 34
let personName = "Abdul Basit"
console.log(`Equality Condition: Is personName == "Abdul Basit"? I predict True. Result = ${personName == "Abdul Basit"}`)
console.log(`Inequality Condition: Is personName != "Abdul Basit"? I predict False. Result = ${personName != "Abdul Basit"}`)

console.log(`Lower case Condition: Is "Abdul Basit".toLowerCase() == "abdul basit"? I predict False. Result = ${"Abdul Basit".toLocaleLowerCase() == "abdul basit"}`)
console.log(`Numerical Equality Condition: Is age == 34? I predict True. Result = ${age == 34}`)
console.log(`Numerical Inequality Condition: Is age != 34? I predict False. Result = ${age != 34}`)
console.log(`Greater than Condition: Is age > 30? I predict True. Result = ${age > 30}`)
console.log(`Less than Condition: Is age < 45? I predict True. Result = ${age < 45}`)
console.log(`Greater than or equal to Condition: Is age >= 30? I predict True. Result = ${age >= 30}`)
console.log(`Less than or equal to Condition: Is age <= 45? I predict True. Result = ${age <= 45}`)
console.log(`Logical && Conditions: Is age > 35 && age < 40? I predict False. Result = ${age > 35 && age < 40}`)
console.log(`Logical || Conditions: Is age > 35 || age < 40? I predict True. Result = ${age > 35 || age < 40}`)

let devices = ["Laptop", "Mobile", "Tablet", "Desktop"]
console.log(`Is "LCD" in devices? I predict False. Result = ${devices.includes("LCD")}`)
console.log(`Is "Mobile" not available in devices? I predict False. Result = ${!devices.includes("Mobile")}`)
