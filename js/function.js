function sum(a,b) {
    console.log(a+b)
}

function multi(a,b) {
    console.log(a*b)
}

sum(5,7)
multi(7,8)

// arrow function 
const arrowsum=(a,b)=>{
    console.log(a+b);
}


// Q1 create a function using the "function" keyword that takes a strings as an argunment & return the numbers of vowels in the strings 
function countvowel(str){
    let count = 0;
    for (const char  of str) {
        if (char=== "a" || char=== "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    console.log(`your entered string (${str}) have ${count} vowels`)
}

countvowel(prompt("enter the string to check numbers of vowels"))
