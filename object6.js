var student ={rollNo:1,name:"Vishwa"}
student.address ="INDIA"
console.log(JSON.stringify(student))
Object.seal(student)//prevents attribute addition/deletion
Object.preventExtensions(student)
try{
student.phoneNo="100011001"
console.log(JSON.stringify(student))
}catch(e){
    console.error(e)
}
console.log(Object.isSealed(student))
Object.freeze(student)
student.rollNo=22
console.log(JSON.stringify(student))

