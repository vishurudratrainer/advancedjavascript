function add(a,b){
    return a+b
}

const addArrow =(a,b)=>a+b
//variable =parameters=single statement {} for more than


console.log(add(22,33))
console.log(addArrow(22,33))

var square =x =>x*x
console.log(square(4))
var squaremodified = x =>{
    console.log("input is",x)
    return x*x
}
console.log(squaremodified(3))