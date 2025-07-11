

//const counter=10

//counter++

function one(){
    const res = "From one"
    console.log("From one",res)
}

function two(){
    const res = "From two"//scope is within function
    console.log("From two",res)
}

one()
two()