//creates a new function when called with this keyword

var display =function(){
    console.log("Emp ID",this.empId,"Emp name",this.empName)
}

var emp ={empId:10,empName:"Vishwa"}

var newDisplay =display.bind(emp)
newDisplay()
var emp1 ={empId:101,empName:"Vishwa101"}

var newDisplay1 =display.bind(emp1)
newDisplay1()