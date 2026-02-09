// // template literals
// let obj = {
//     item: "pen",
//     price:10,
// }
// let str = "      heyy\nhow are you!      ";
// let newStr = "12345"
// let NewStr = "hello"
// let output = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(output);

// console.log(str);
// console.log(str.length);

// // string method (string function)

// console.log(str.toUpperCase());

// console.log(str.toLowerCase());

// console.log(str.trim()); // trim starting and ending space

// console.log(newStr.slice(1,5));
// console.log(NewStr.slice(1,4))

// console.log(newStr.concat(NewStr));  // concat strings str1 + str2

// console.log(NewStr.replace("hello","Heyyy!"));  // replace strings

// console.log(NewStr.charAt(4));

// question 1
// prompt the user to enter their fullname generate a username for them based on the input start usrtnamr with @ followed by their fullname with the fullname and ending with the fullname lenght

let fullname = prompt("enter the fullname");
let username = `@${fullname}${fullname.length}`;
console.log(username);
