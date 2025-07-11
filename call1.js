//creates a new function when called with this keyword

var display =function(theme){
    console.log("Display in theme",theme)
    console.log("Emp ID",this.empId,"Emp name",this.empName)
}

var emp ={empId:10,empName:"Vishwa"}

display.call(emp,"black")
display.call(emp,["black"])