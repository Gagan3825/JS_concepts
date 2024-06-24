// function name(a,b) {
//     return a+b
// }

// console.log(name(10,11));

// let ans= function(){
//    return 10+11;
// }
// console.log(ans);

// const ans=(a,b)=>{
//     return a+b;
// }
// console.log(ans(1,2));

//callback funtion
// function divide(sum){
// console.log(sum/2);
// }

// function multiple(sum){
//     console.log(sum*2);
// }

// function operationsum(num1,num2,operation){
//     var sum=num1+num2;
//     operation(sum);
// }

// operationsum(3,5,divide);


// promise in js

// function sum(...elements) {
//     return new Promise((resolve,reject)=>{
//         if(elements.length>3){
//             reject("error");
//         }else{
//             let sum=0;
//             let i=0;
//             while(i<elements.length){
//                 sum+=elements[i];
//                 i++;
//             }
//             resolve("sum has been calculated "+sum);
//         }
//     })
// }

// sum(4,5,6)
// .then(result=>console.log(result))
// .then(error=>console.log(error));

// square(5);
// const square=function(num){   // function in an expreesion 
//  console.log(num*num);
// };


// square(5);
// function square(num){   // hoisting
//      console.log(num*num);
//      };

// const square = (num)=>{
//  console.log(num*num);
// }
// square(5);


// let obj={
//     name:"JS",
//     //arrow function
//     js1:()=>{
//         console.log(`hello,${this.name}`);   //this doesnt work here
//     },
//     js2(){
//         console.log(`I love,${this.name}`);
//     }

// }
// obj.js1();
// obj.js2();

//create a higher-order function using arrow functions?

// const withgreeting=(greeting)=>(name)=>{
//     console.log(`${greeting},${name}`);
// }

// const greethello=withgreeting('Hello');
// const greethi=withgreeting('hi');

// greethello('John');
// greethi('jane');

//callback function
// function f1(f2){
//     console.log("f1");
//     f2();
// }

// f1(function f2() {
//     console.log("f2");
// }
// )

//works asynchronously
// setTimeout(()=>{
// console.log("Timer");
// },5000)

// console.log("Hello");

function sum(x,y,multiply){
    let res=x+y;
    multiply(res);
}

sum(40,30,function multiply(res) {
    for(let i=1;i<10;i++){
        console.log(res*i);
    }
})