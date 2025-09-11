var name = "Namaste Node Js";
console.log(name);

console.log(global); // return global data
console.log(this); // return {} - empty object



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

console.log(globalThis); 

