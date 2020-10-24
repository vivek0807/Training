//import fs module
const fs = require("fs");

//***************Blocking**************** */
//call readFileSync method with args
//1. File name
//2. "utf-8"
//return data from the file
//print the file's content


/* const data = fs.readFileSync("data.txt", "utf-8");


console.log(data)

console.log("I am blocked") */

/*************Non blocking*********/
//call readFile method with args
//1. filename
//2. char encoding
//3. error first callback function with args - error and data

fs.readFile("data.txt", "utf-8",  (err, data) => {
    if (err)
        return console.error(err)
    console.log(data)
})
console.log("I will be printed first")
/* for (let i = 0; i < 10e7; i++) {
    let a = i ** i
} */
