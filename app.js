const  calculateItems = require( "./calculateItems"); // we will get function from here
const  items = require( "./calculateItemsWithObject"); // we will get object from there or const {a, calculateItems} = require() .. // called destructureing 
const a = 10;
var b = 20;
console.log(calculateItems(a,b));
console.log(items.calculateItems(a,b));
console.log(items.a);

