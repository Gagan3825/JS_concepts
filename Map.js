//Map is a collection of elements as key ,value pair

// let hs=new Map();
// hs.set(1,"Apple");
// hs.set(2,"Mango");
// hs.set(3,"Banana");
// //traverse in the map using foreach
// hs.forEach((values,keys)=>{
// console.log(values,keys);

// if(hs.has(1)){
//     console.log(hs.values);
// }
// })


//Set objects are groups of distinct values. A set is a collection of unique elements i.e. no element can appear more than once in a set.

let hs=new Set();
hs.add(10);
hs.add(20);
hs.add(20);
console.log(hs.keys());
hs.forEach((values,keys) => {
    console.log(values,keys);
});

