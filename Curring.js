//Currying is a function that takes multiple arguments as input. 
// It transform the function into a number of functions where every function will accept one argument.
//Article link:-https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

//Convert sum(2,6,1) to sum(2)(6)(1)

// function sum(num1,num2,num3) {
//     return num1+num2+num3;
// }

// const simplesum=sum(2,6,1);
// console.log(simplesum);

//curring

// function sum() {
//     return function (b){
//         return function (c){
//             console.log(b+c);
//         }
//     }
// }


// const simplesum=sum()(6)(1);
// simplesum;


//(”sum”)(2)(4) ⇒ 2+4 = 6 

// function sum(name){
//     return (a)=>{
//         return (b)=>{
//             if(name==="multiply")return a*b;
//             else if(name==="add")return a+b;
//         }
//     }
// }

// const multip=sum("multiply")(4)(5);
// console.log(multip);//20

// const add=sum("add")(4)(5);
// console.log(add);//9

//Write a currying function that takes infinite arguments.

const sum = (a)=> {
    return function(b) {
        if (b) {
            return sum(a + b); 
        } else {
            return a;
        }
    }
}
const res=sum(1)(2);
console.log(res);