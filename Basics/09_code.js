// #Primitive
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

 const score = 100;
 const svoreValue = 100;
 const isLoggeIn = null;
 let userEmail;
 
 const id = Symbol('123');
 const anotherId = Symbol('123');

 console.log(id == anotherId);

// Refrence (Non Primitive)
// Array , Objects , Functions 

const heroes = ["Shaktiman" , "Naagraj" , "Doga"];
let myObj = {
    name : "Dheeraj", 
    age : 23,
}

const myFunction = function(){
    console.log("Hello");

}
console.log(myFunction);