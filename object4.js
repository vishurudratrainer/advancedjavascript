function Student(name,age,id){
    this.name=name
    this.age=age
    this.id=id
    this.display=function(){
        console.log("Name is ",this.name)
        console.log("ID is ",this.id)
        console.log("Age is ",this.age)

    }
}

s1=new Student("Raju",22,1)
console.log(JSON.stringify(s1))
s2 = new Student("Vishwa",55,2)
console.log(JSON.stringify(s2))
s2.display()