class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  display() {
    console.log("ID", this.id, "NAME", this.name);
  }
}
var s1 = new Student(1,"Vishwa")
s1.display()