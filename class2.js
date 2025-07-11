class Parent1{
    constructor(p1){
        this.p1=p1
    }
    displayP1(){
        console.log("P1 is",this.p1)
    }
}

class Child1 extends Parent1{
    constructor(p1,p2){
        super(p1)
        this.p2=p2
    }
}

var c1 = new Child1(22,33)
c1.displayP1()
console.log(c1.p2)