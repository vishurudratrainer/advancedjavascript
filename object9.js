const myOwnProto = {
  welcome() {
    console.log("I am from proto");
  },
  display(){
    console.log("Display from me",this)
  }
};

function Person(id,name){
  this.id=id
  this.name=name

}
Object.assign(Person.prototype,myOwnProto)
//how to combine prototype and constructor
var myObject1 = new Person(1,"Vishwa")
myObject1.welcome();
myObject1.display()
