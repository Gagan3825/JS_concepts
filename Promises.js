//promises use in asyn task it gives us result like completion of task(resolve,reject)
function getchesse(){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const chesse="🧀";
             resolve(chesse);
        },2000)
    })
}
function getdough(chesse){
  return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough= chesse+"🍩" ;
             resolve(dough);
        },2000)
    })
}
function getPizza(dough){
   return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza= dough+"🍕" ;
             resolve(pizza);
        },2000)
    })
}

// this is simple then and catch of promise 
getchesse().then((chesse)=>{
    console.log("chesse is here",chesse);
    return getdough(chesse);
    
}).then((dough)=>{
    console.log("dough is here",dough);
    return getPizza(dough);
})
.then((pizza)=>{
    console.log("pizza is here",pizza);
}).catch((data)=>{
    console.log("error is here",data);
})

//we can also do it with asyn/awai

// const data=async ()=>{
//     const chesse=await getchesse();
//     console.log("chesse is here"+chesse);

//     const dough=await getdough(chesse);

//     console.log("dough is here"+dough);

//     const pizza=await getPizza(dough);
//     console.log("pizza is here"+pizza);
// }
// data();