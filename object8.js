const myOwnProto = {
  welcome() {
    console.log("I am from proto");
  },
  display(){
    console.log("Display from me")
    //console.log("display",this.name) will not work...we make use bind
  }
};

function Person(id,name){
  this.id=id
  this.name=name

}
Object.assign(Person.prototype,myOwnProto)
var myObject1 = Object.create(myOwnProto);
myObject1.welcome();
myObject1.display()
