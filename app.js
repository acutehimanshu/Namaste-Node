// const  calculateItems = require( "./calculateItems"); // we will get function from here
// const  items = require( "./calculateItemsWithObject"); // we will get object from there or const {a, calculateItems} = require() .. // called destructureing 
// const a = 10;
// var b = 20;
// console.log(calculateItems(a,b));
// console.log(items.calculateItems(a,b));
// console.log(items.a);

const {sum, multiple} = require('./calculator')
const name ="Lecture 4: Namaste Node"
const a = 10;
const b = 20;
const c = 30;
console.log(sum(a,b));
console.log(multiple(a,c));
console.log(name);

const data = require("./data.json")
console.log(data);
