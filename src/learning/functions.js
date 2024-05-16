const fs = require("fs")

// Method 1 using simple callback  functions 

function callback(err, data) {
    console.log(data);
}

fs.readFile("a.txt", "utf-8", callback)

// Method 2 using anonymous functions

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
})

// Method 3 using the arrow functions

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data);
})