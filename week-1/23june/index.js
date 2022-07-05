// let obj1 = {
//     name: "Prashant",
//     getName: function (a) {
//         return(this.name +" "+ a)
//     }
// }
// let obj2 = {
//     name:"Aaditya"
// }
// let res =  obj1.getName.bind(obj2,26)  
// console.log(res())


// var func = function () {
//   console.log(this);
// }.bind("2");

// func();


// call ,apply


// let callobj = {
//     age: 32
// }
// function fun1(name, address) {
//   console.log(`${name} age is ${this.age}, ${address}`);
// }
// fun1.call(callobj, "Prashant","Mumbai")
// fun1.apply(callobj, ["Prashant", "Mumbai"]);


// question 2


// "use strict";
var fs = require("fs");

// /***
//  * implementation of readFileSync
//  */
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());
// console.log("Program Ended");

/***
 * implementation of readFile
 */
// fs.readFile("input.txt", function (err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });

// console.log("Program Ended");


// question 3

 /***
The process object in Node.js is a global object that can be accessed inside any 
module without requiring it. There are very few global objects or properties provided in Node.js
 and process is one of them. It is an essential component in the Node.
js ecosystem as it provides various information sets about the runtime of a program.
his is very useful if you are building a command line application or utility using Node.js
process.stdin: a readable stream
process.stdout: a writable stream
process.stderr: a wriatable stream to recognize errors
*/

/* write program to reverse string*/

// let str = "raj";
// console.log(str.split("").reverse().join(""));


// let str2 = "aman"
// let res2 = ""
// for(var i=str2.length-1; i>=0; i--){
//     res2 +=str2[i]
// }
// console.log(res2)


// function reverseS(str,i=str.length-1) {
//     if(i < 0) {
//         return ""
//     }
//     else{
//         return str[i] + reverseS(str, i - 1);
//     }
// }
// console.log(reverseS("aman"));