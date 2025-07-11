
var one ={name:"Raj",age:22,address:34}
var copy =Object.assign({},one,{name:"Raju",age:10})
//                      source,target,any change values
console.log("ONE",one)
console.log("COPY",copy)

var copy1 = {...one,name:"Raju123",age:44}
console.log("COPIED",copy1)

