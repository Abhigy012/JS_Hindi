const name = "Abhay Goyal"
const repoCount = 50
// console.log(name + repoCount + "Value:50"); // modern days mein aise use nahin hota strings
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gamename = new String('iteshh')
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase()); // yeh kabhi original value ko change nahin karta hai
console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));
const newstring = gamename.substring(0, 4)
console.log(newstring);
const anotherstring = gamename.slice(0, 2)
console.log(anotherstring);
const newstr = "   hitesh   "
console.log(newstr.trim()); // remove start and end whitespace
const url = "xyz@gmail.com"
console.log(url.replace("gmail", "yahoo"))
console.log(url.includes("sundar"))
console.log(url.split('@' ));