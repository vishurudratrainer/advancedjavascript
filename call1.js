//creates a new function when called with this keyword

var display =function(theme,location){
    console.log("Display in theme",theme,location)
    console.log("Emp ID",this.empId,"Emp name",this.empName)
}

var emp ={empId:10,empName:"Vishwa"}

display.call(emp,"black","ind")
display.apply(emp,["black","usa"])