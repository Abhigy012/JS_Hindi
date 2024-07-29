let score = "33";
let score2 = "3332Bgwd1632";
console.log(typeof score);
let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); // it will give nan because the given string is not a pure number string
value = null;
number = Number(value);//will give 0
let booly = true;
number = Number(booly);//will give 1
console.log(number);
booly = Boolean(number);
console.log(booly);
str = ""
booly = Boolean(str)//will give false if string empty and true if otherwise
//a number can also be converted into strings
