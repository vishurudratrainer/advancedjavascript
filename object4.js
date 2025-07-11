function Student(name,age,id){
    this.name=name
    this.age=age
    this.id=id
    this.display=function(){
        console.log("Name is ",name)
        console.log("ID is ",this.id)
        console.log("Age is ",this.age)

    }
}
//Student.country="America" --this will not work beacuse we cannot directly assign
Student.prototype.country="America"
Student.prototype.getCountry=function(){
    console.log("Country is ",this.country)
}
s1=new Student("Raju",22,1)
console.log(JSON.stringify(s1))
s2 = new Student("Vishwa",55,2)
console.log(JSON.stringify(s2))
s2.display()
console.log(s1.country)
s1.getCountry()
//Using inbuild prototype function we can add new properties

s3 = Object.assign({},s2)//creates a copyof object with properties inlized from other object
console.log(JSON.stringify(s3))