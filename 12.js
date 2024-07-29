const dc_heroes = ["thor", "Ironman", "Spiderman"]
const marvel_heroes = ["superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes) // yeh seedha array ko add kar lega apne andar uske elements nahin
// console.log(marvel_heroes);
// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);
// const newarray = marvel_heroes.concat(dc_heroes)
// console.log(newarray); // yeh sahi tareeke se add kardega har ek element

//spread use karte hain iske liye
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);
const anotherarray = [1, 2, 3, [4, 5, [6, 7, 8]]]
const real_another_array = anotherarray.flat(Infinity) // infinity generally use nahin karte specify karte hain , but it will handle all depths
// console.log(real_another_array);
// console.log(Array.isArray("Abhay"));
// console.log(Array.from("hitesh"));
// console.log(Array.from({ name: "Abhay" })); // ******** interesting case
score1 = 100;
score2 = 200;
score3 = 300;
console.log(Array.of(score1,score2,score3));//Array formation from a specified set of elements