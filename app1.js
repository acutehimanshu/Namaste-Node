require("./anotherFile")

var name = "Namaste Node Js";
console.log(name);


/*
require("./calculateItems")
console.log(calculateItems(10,20));
give Error : 
ReferenceError: calculateItems is not defined
-> When you include file with required keyword it only loads the data but you can not access variable and functions directly.
as modules protect their variable and function from leaking 
*/



// console.log(global); // return global data
// console.log(this); // return {} - empty object



// But when you run this on Brower console. 
// you will get global object on 

// window 
// this
// self 
// frames 

/*
in node js 
Global is Global 
in browser windo this self and frames are global 
on other js engine there might be other global variable 

so there should be some keywords new common Global keywords that is "globalThis"
- why not taken any of the above? becuase it will create conflits so taken the new name

*/

// console.log(globalThis); 

