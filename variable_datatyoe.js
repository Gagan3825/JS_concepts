//Global Variable: These are variables that are defined in global scope i.e. outside of functions. These variables have global scope, so they can be accessed by any function directly.
//Local Variable: When you use JavaScript, local variables are variables that are defined within functions. 

// let fruit="Mango"  //global variable
// function myfun() {
//     let newfruit="Apple"; //local variable
//     console.log(newfruit);
// }

// console.log(fruit);
// myfun();

// const a=10;


// console.log(a);
//in function we can simple pass arguments in function without writing let to it
//2 sum problem
// function two_sum(array,target) {

//     let arr=[];
//     let k=0;
//     for(let i=0;i<array.length-1;i++){
//         for(let j=i+1;j<array.length;j++){
//            if(array[i]+array[j]==target){
//                 arr[0]=array[i];
//                 arr[1]=array[j];
//            }
//         }
//     }
//     return arr;

    
// }

// let array=[1,3,4,5,6];
// let target=10;
// console.log(two_sum(array,target));

//const variable declaration to others is that it cannot be re-assigned.but in array and object possible to change via reference

//typeOf operator

// let a=10;
// let b="gagan";
// console.log(typeof a);
// console.log(typeof b);