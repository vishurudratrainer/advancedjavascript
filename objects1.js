//Javascript key value pair
//value scalar/object/function
var student = {
  id: 1,
  name: "Vishwa",
  display: function () {
    console.log("Student name is ", this.name);
    console.log("Student id is ", this.id);
  },
};
console.log(student["id"]);
console.log(student["name"]);
console.log(student.id);
console.log(student.name);
console.log(JSON.stringify(student));
student.display()
