"use strict";
// let playerName ="shahadat";
// let age =35;
// console.log(playerName)
// age="shakib"
// console.log(playerName)
// let playerName;
// console.log(playerName)
// playerName ="masrafi"
// playerName =34
// console.log(playerName)
// function multifly(a:number,b:number){
//     return a*b;
// }
// console.log(multifly("shahadat",4))
//array
// let fruits =["banana","apple","watermelon","mango",true,34,{}]
// fruits.push({
//     name:"shahadat"
// })
// console.log(fruits)
// let person ={
//     name:"shahadat",
//     age:35,
//     isCaptain:true
// }
// person.country ="Bangladesh"
// explicit and union type
// let a:string;
// let b:number;
// a ="shahadat"
// b= "45"
// // normal variable 
// let b:string | number;
// // array 
// let a:(string | number )[]=[];
// b="shahadat"
// a.push('shahadat',4,false)
// //object 
// let c:{
//     name: string,
//     age: number,
//     adult: boolean
// };
// c=[]
// dynamic type 
// let a : any [] = [];
// a.push("Bangladesh")
// a.push(34)
// //object 
// let b:{
//     name :any,
//     age:any
// }
// b={
//     name:"bangladesh",
//     age:10
// }
// function type 
const myFun = (a, b, c = "true") => {
    return a + b;
};
myFun("A", "B", "false");
