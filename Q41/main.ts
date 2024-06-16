// //Assignment # 41
// Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let megician : string[] = ["Alice", "David", "Carolina"];
let birds : string[] = ["Sparrow", "Pigeon", "Duck"];

function show_megician (megicians : string[]) {
  megicians.forEach(megician => {
  console.log(`${megician} is a great megician`)
})}

show_megician(birds)
show_megician(megician)
