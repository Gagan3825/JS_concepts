//Map method:-creates a new array by perfoming some operations on each array element
// const a=[1,2,3];
// console.log(a); // original array
// let b=a.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value*value;

// })
// console.log(b);    //[1,4,9]

//filter:-  method takes each element in an array and it applies a conditional statement against it.
//  If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

// const arr=[1,2,3,4];
// let ans=arr.filter((value)=>{
//     return value<3;

// })
// console.log(ans); //[1,2]

//Reduce:-Reduce an array to a single value
// const arr=[1,8,7,11];
// let sum=arr.reduce((value1,value2)=>{
//     return value1+value2;
// })
// console.log(sum);'

// function ans(){
// let name="Gagan";
// console.log(this.name);
// }
// ans(); //this.name will give undefined ,this keyword is used for the same context


const ans=()=>{
    let name="Gagan";
    console.log(this.name);
}
ans();