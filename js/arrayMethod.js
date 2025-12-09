let foodItems = ["aalo", "apple", "bnana", "mango"];

//push() add to end
foodItems.push("chips", "burger");
console.log(foodItems);

// pop() delete form end & return

let dltItem = foodItems.pop();
console.log(dltItem);

// concat() join multiple arrays & return result

let marvel = ["thor", "spiddy", "ironMan"];
const foodHero = marvel.concat(foodItems);
console.log(foodHero);

// slice() return a piece of the array
console.log(marvel.slice(1, 2));

// splice() change original array (add,remove,replace)
marvel.splice(2, 2, "dr strange", "Antman");
console.log(marvel);

// Q1 create an array to store companies ["bloomberg","microsoft","uber","google","ibm","netflix"]
// a . remove the first company form the array
// b.remove uber & add ola in its place
// c. add amazon at the end

let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
// remove the first company form the array
companies.shift();
// remove uber & add ola its place
companies.splice(1, 1, "ola");
// add amazon at the end
companies.push("amazon");
console.log(companies);

// for-each loop in arrays
//foreach("CallBackFunction")  it is a function to execute for each element in the array
// callBack function pased as an agrunmnet to another function

let arr = [2, 3, 4, 5, 6];
arr.forEach((val) => {
  console.log(val * 2);
});

//Q2 for a given array of number, print the square of each value using the foreach loop
console.log("question 2");
let num = [2, 4, 6, 8];
num.forEach((num) => {
  console.log(num * num);
});

//Q3 we are given array of marks of student. filter out the marks of  student that scored 90+
console.log("Question 3");
let marks = [89, 78, 60, 90, 99, 98, 100];
let toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers.toString());

//Q4Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.
console.log("Question 4");
let n = prompt("enter a number between 1 to 10");
let numbArr = [];
for (let i = 1; i <= n; i++) {
  numbArr[i - 1] = i;
}
console.log(numbArr);

let sumArr = numbArr.reduce((result, current) => {
  return result * current;
});
console.log(sumArr);

let fact = numbArr.reduce((result, current) => {
  return result * current;
});
