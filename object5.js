const person = {
  id: 1,
  name: "Raj",
  get fullName() {
    return this.name;
  },
  set fullName(name) {
    this.name = name;
  },
};

console.log(person.fullName)
person.fullName ="Raju"
console.log(person.fullName)

