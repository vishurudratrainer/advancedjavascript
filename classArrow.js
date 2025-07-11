
class Student{
    constructor(rollNo,name){
        this.rollNo=rollNo
        this.name=name
    }
    display=()=>console.log("RollNo ",this.rollNo,"name",this.name)
}

var s1 = new Student(1,"Raju")
s1.display()