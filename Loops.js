//for loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }

//for In loop
//A for-in loop is used to loop through the properties of an object.

// let obj={a:1,b:2,c:3};
// console.log(obj["a"]);
// for(let i in obj){
//     // console.log(i +":"+obj[i]);
//     console.log(obj.i);
// }

//A for-of loop is used to loop through the values of an iterable object (such as an array.

// let obj=[1,2,3]
// for(let i of obj){
// console.log(i);
// }

//A forEach loop is a method on arrays that executes a function for each element in the array.
// let obj=[1,2,3];
// obj.forEach(val=>console.log(val));

// function fun(params) {
//     const arr=[12,24,36];
//     const copy=[];
//     arr.forEach(function (arr){
//         copy.push(arr+arr+2);
//     })
//     console.log(copy);
// }
// fun();

//A map loop is a method on arrays that creates a new array by executing a function on each element in the array.
// let hs=new Map();
// hs.set("a",1);
// hs.set("b",2);
// hs.set("c",3);

// hs.forEach((values,keys)=>{
//     console.log("Values:",values,"Keys: ",keys);
// })


// let arr=[1,2,3,4,56];
// let ans=arr.forEach((value,index,array)=>{
//     console.log(value+index);
// })
// console.log(ans);


