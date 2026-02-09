// let arr = [10,5,4,3,2]
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Q1 for a given array with marks of students [85,97,44,37,76,60] find the average marks of the entire class
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

// for of loop
// for (let val of marks) {
//     sum+=val
// }

//  for loop
console.log("Que 1");

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let avg = sum / marks.length;
console.log("total", sum);
console.log(`avg marks of the class = ${avg}`);

// Q2 for given array with price of 5 itmes [250,645,300,900,50] all items have an offer of 10% off on item change the array to store final price after applying offer
console.log("Que 2");

let item = [250, 645, 300, 900, 50];

for (let i = 0; i < item.length; i++) {
  console.log(`value before offer = ${item[i]}`);

  let offer = item[i] / 10;
  item[i] -= offer;
  console.log(`value after offer = ${item[i]}`);
}
