//**************date****************  beginning of january 1 , 1970

// let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString()); sabse accha method hai for specifying internationalising
// console.log(typeof mydate); // it is a type object
// let newdate = new Date(2023,0,23,18,3) // months start hote hain zero se
// console.log(newdate.toLocaleString());
// let anotherdate = new Date("2023-01-14") yy mm dd
// console.log(anotherdate.toLocaleString());
// let newdate2 = new Date("01-14-2023") //mm dd yy
// // console.log(newdate2.toLocaleString());
// let timestamp = Date.now()
// console.log(timestamp.toLocaleString()) // use .gettime() for getting a date in milliseconds , comparsion humesha milliseconds mein hi karna
// console.log(Math.round(Date.now() / 1000)); //  very common interview question to convert ms to s
// let newdate = new Date()
// console.log(newdate.getMonth() + 1); //returns a number
// console.log( newdate.getDay()); //returns a number
let newdate = new Date()
console.log(newdate.toLocaleString('default' , {weekday : "long"})); // aise hi hum aur properties ko bhi define kar sakte hain
// ek baar timezone padh lena

