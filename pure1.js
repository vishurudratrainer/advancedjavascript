var object1 ={roomNo:22,color:"red"}


var changeColor = (param,newColor)=>{
    let newObject ={...param,color:newColor}
    return newObject
}

console.log("Orginal",object1)
var resul=changeColor(object1,"green")
console.log("Orginal",object1)
console.log("Result",resul)

