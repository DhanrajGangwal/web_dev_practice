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
