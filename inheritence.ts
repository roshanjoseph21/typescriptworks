class Parent{
    parentMethod(){
        console.log("parent method");
        
    }
}


class Parent2 extends Parent{
    secondParentMethod(){
        console.log("second parent method");
        
    }
}


class Child extends Parent2{
    childMethod(){
        console.log("child method");
        
    }
}

var ch= new Child()
ch.childMethod()
ch.parentMethod()