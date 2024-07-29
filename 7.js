let myname = "Abhay Goyal"
let anohername = myname
console.log(anohername); // --> stack
anohername = "Abhi Goel"
console.log(anohername);
console.log(myname);
let user = {
    email: "user@google.com",
    upi:"user@ybl"
} // yeh ek reference deta hai apne objects ke liye --> heap
let user2 = user;

user2.email = "abhaygy454@gmail,com" // jab reference same hi elements ko hai toh chnage bhi woh hi hoga -->heap
console.log(user);
console.log(user2);