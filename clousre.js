// a closure gives you access to an outer function's scope from an inner function.
//  In JavaScript, closures are created every time a function is created, at function creation time.
//https://roadsidecoder.hashnode.dev/closures-javascript-interview-questions
// The JavaScript module pattern is a design pattern used to organize and encapsulate code in a way that provides private and public access to variables and functions. 
// It helps avoid polluting the global namespace and promotes code reusability, modularity, and maintainability

// function fn(){
//     var a='gagan'; //lexical scoping
//     function display(){
//        return a;
//     }
//     display();
// }
// fn();

//Can you create a function named createBase to show the below functionality?

// function createbase(args){
//     return function(n){
//         return args+n;
//     }
// }
// var addsix=createbase(6);
// console.log(addsix(10));
// addsix(10);


// Rewrite the function in such a way the output gets printed once even though the function is called multiple times.
// let view;
// function like(){
//     let called=0;
//     return function(){
//         if(called>0){
//             console.log("subscribed");
//         }else{
//             view="Gagan";
//             called++;
//             console.log("subscribed",view);
//         }
//     }
// }
// let subscribe=like();
// subscribe();
// subscribe();

// How would you use a closure to create a private counter?
// function counter(){
//     var _count=0;

//     return{
//         add:function(increment){_count+=increment;},
//         retrive:function(){return 'the counter is at' + _count;}
//     }
// }

// var c=counter();
// c.add(5);
// c.add(9);
// console.log(c.retrive());



