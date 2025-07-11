function Student(name,age,id){
    this.name=name
    this.age=age
    this.id=id
}

s1=new Student("Raju",22,1)
console.log(JSON.stringify(s1))
s2 = new Student("Vishwa",55,2)
console.log(JSON.stringify(s2))