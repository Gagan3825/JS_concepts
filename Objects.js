//Objects, in JavaScript, are the most important data type and form the building blocks for modern JavaScript.
//objects contain keys and values and also function known as method

// let school={
//     name:"Gagan",
//     class:12,
//     "school name":"khalsa school",
//     display:function () {
//         console.log(` the  name of student is ${school.name} and class is ${school.class}`);
//     }
// }

// school.display();

//iterating it using for in loop

// for(let i in school){
//     // console.log(school[i]);//print values
//     // console.log(i);//print keys

//     console.log(i,":", school[i]);//print keys and values

// }

//Json :JavaScript Object Notation (JSON) is a text-based, human-readable interchange format used for representing simple data structures and objects in web browser-based code. 
// JavaScript objects can only exist within the JavaScript language, so when you are working with data that needs to be accessed by various languages, it is best to refer to JSON.
// Rules to declare an object:

// The object is always defined inside the curly brackets { }.
// Objects are written in key pairs.
// The keys must be strings, and their values must be a valid JSON data type. The JSON data types can be number, string, object, boolean, array, or null.
// The keys and values are separated by a colon(“:”).
// Each key or value pair is separated by a comma.


// let fitness={
//     "name":"Chest",
//     "workout":"Jumping Jacks",
//     "Excersise":{
//         "workout1":"cunches",
//         "sets":10,
//     }
// }

// console.log(fitness.name);
// console.log(fitness.workout);
// console.log(fitness.Excersise.workout1);
// console.log(fitness.Excersise.sets);

// for(let i in fitness){
//     console.log(i,":",fitness[i]);
//     // console.log();
// }


// let obj={
//     "name":"fitness",
//     "class":"rock",
//      funct:()=>{
//         console.log("hello pritishta");
//      }
// }

// console.log(obj.name);

const obj={
    "a":"apple",
    "b":"mango",
    "a":"papaya"
}

console.log(obj);
