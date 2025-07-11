var object1 ={roomNo:22,color:"red"}


var changeColor = (param,newColor)=>{
    param['color'] = newColor
    return param
}

console.log("Orginal",object1)
var resul=changeColor(object1,"green")
console.log("Orginal",object1)
console.log("Result",resul)

