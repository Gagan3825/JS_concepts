//When the interpreter hoists a variable declared with var, it initializes its value to undefined. 
//The first line of code below will output undefined:
//var has funcitonal scope

//Function hoisting in JavaScript
//Function declarations are hoisted, too. Function hoisting allows us to call a function before it is defined.

//example
// console.log(varname);
// const varname=10;
// console.log(varname);
// varname=10;
// console.log(varname);
// fun();
// function fun(){
//     console.log("Running");
// }
// fun();
// // fncontainer();//error

// var fncontainer=function () {
//     console.log("in this container");
// }
// fncontainer();

// console.log("line number 1",varname); //undefined
// var varname=10;

// function b() {
//     console.log("line number 4",varname);//10 beause of above varname intialization

// }
// console.log("line number 2",varname); //10

// function fun() {
//     console.log("line number 3",varname);//undefined  beacuse the functions makes its own 
//     var varname=20;
    
//     b();
//     console.log("line number 5",varname);//10
// }
// fun();

let letfruit="orange";
var varfruit="orange";

console.log("letfruit",letfruit,"varfruit",varfruit);
{
    let letfruit="mango";
    var varfruit="mango";
    console.log("letfruit",letfruit,"varfruit",varfruit);

}
console.log("letfruit",letfruit,"varfruit",varfruit);