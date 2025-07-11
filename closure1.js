//Closures are way in which we can retain a variable even after the function
//in which it is defined is done executing
function UserCounter(startCounter=0){
    let count =startCounter

    return function(){
        return ++count
    }
}

const noOfUsers =UserCounter(10)
console.log(noOfUsers())
console.log(noOfUsers())
console.log(noOfUsers())