
var colors =["red","green","blue"]

var addColor = (param,color)=>{
    let newcolor = param.concat(color)
    return newcolor
}

console.log("Orginal",colors)
var result=addColor(colors,"pink")
console.log("Orginal",colors)
console.log("Result",result)
