//Closures are way in which we can retain a variable even after the function
//in which it is defined is done executing
function UserCounter(startCounter = 0) {
  let count = startCounter;

  return function (inc = true) {
    if (inc) return ++count;
    else return --count;
  };
}

const noOfUsers = UserCounter(10);
console.log(noOfUsers());
console.log(noOfUsers(false));
console.log(noOfUsers(false));
console.log(noOfUsers.count)//will come undefined beacuse we are returning function
