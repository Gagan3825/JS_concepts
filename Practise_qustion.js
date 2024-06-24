//ist question
// let a=5;
// let b=6;
// //swap
// // let c=a;
// // a=b;
// // b=c;

// a=a^b;
// b=a^b;
// a=a^b;

// console.log(a);
// console.log(b);

// let a=[1,2,300,4];
// let maxi=0;
// for(let i of a){
//     maxi=Math.max(maxi,i);
// }
// console.log(maxi);

// let s="";
// for(let i=0;i<5;i++){
//     // console.log("*");
//     for (let j = 0; j < 5; j++) {
//        s+="*";
        
//     }
//     s+="\n";
// }
// console.log(s);
// let n=5
// let s="";
// for(let i=0;i<=n;i++){
    
//     for(let j=0;j<n-i;j++){
//         s+=" ";
//     }

//     for(let k=0;k<i;k++){
//         s+="*";
//     }
//     s+="\n";

// }


// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         s+="*";
//     }
//     s+="\n";
// }


// for (let i = 1; i <=n; i++) {
//    for (let j = 1; j <= n-i; j++) {
//    s+=" ";
    
//    }
//    for(let k=0;k<2*i-1;k++){
//     s+="*";
//    }
//    s+="\n";
    
// }
// console.log(s);

// for(let i=0;i<=n;i++){
//      for(let j=0;j<i;j++){
//         s+=" ";
//      }
//      for(let k=0;k<2*(n-i)-1;k++){
//         s+="*";
//      }
//      s+="\n";
// }
// console.log(s);

// for(let i=0;i<=n;i++){
//     //spaces
//     for(let j=0;j<n-i;j++){
//        s+=" ";
//     }
//     for(let k=0;k<2*i-1;k++){
//         if(i===n || i===1)
//        s+="*";
//        else{
//         if(k===0 || k===2*i-2)s+="*";
//         else{
//             s+=" ";
//         }
//        }
       
//     }
//     s+="\n";
// }


//diamond star
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         s+=" ";
//     }
//     for(let k=0;k<2*i-1;k++){
//         s+="*";
//     }
//     s+="\n";
   

// }
// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
//         s+=" ";
//     }
//     for(let k=0;k<2*(n-i)-1;k++){
//         s+="*";
//     }
//     s+="\n";
   

// }


// console.log(s);

//promises

// function prms() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const get = "chesse";
//             resolve(get);
//         },2000)
//     })
// }
// function prms2(item) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const get = item + "pizza";
//             resolve(get);
//         },2000)
//     })
// }

// const promis = async ()=>{
//         const chesse=await prms();
//         console.log(chesse);
//         const get = await prms2(chesse);
//         console.log(get);
// }

// promis();

//spread

// function sum(...arr) {
//     return arr.reduce((total,arr)=>total+arr+0);
// }

// console.log(sum(...[2,3,5]));

// const arr=[2,3,5];
// const arr2=[6,7,8];
// const asn=[...arr,...arr2];
// console.log(asn);


// function sum(a){
//     return function(b){
//         // console.log(b);
//         return function(c){
//             return a+b+c;
//         }
//     }
   
// }

// console.log(sum(5)(6)(7));

//clouser
// function sum(a) {
//     console.log(a);
//     var c=10;
//     return function (b){
//         return a+b+c;
//     }
// }

// var res=sum(5);
// console.log(res(10));

// function sum(a,b,c){

//     return {
//         getfirsttwo:function(){
//             return a+b;
//         },
//         getfirstthree:function(){
//             return a+b+c;
//         }
//     }
// }

// const ans=sum(7,8,9);
// console.log(ans.getfirsttwo());
// console.log(ans.getfirstthree());


//callback function:-A callback is a function that is passed as an argument to another function and is executed after the completion of a particular task. Callbacks are commonly used in asynchronous operations, such as handling events, making API calls, or reading files

// function sum(a,b,fn){
//     let res=a+b;
//     fn(res);
// }
// console.log(sum(2,5,(res)=>console.log(res)));


console.log(10+ +"8");


