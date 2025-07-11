const myOwnProto = {
  welcome() {
    console.log("I am from proto");
  },
};

var myObject1 = Object.create(myOwnProto);
myObject1.welcome();

do {
  myObject1 = Object.getPrototypeOf(myObject1);
  console.log(myObject1);
} while (myObject1 != null);
