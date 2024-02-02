class Employee{
    code:string;
    name:string;
    department:string;
    salary:number;
    setEmployee(code:string,name:string,department:string,salary:number){
        this.code=code
        this.name=name
        this.department=department
        this.salary=salary

    }
    printDetails(){
        console.log(this.name,this.department,this.salary);
        
    }

}

let obj1=new Employee()
obj1.setEmployee("eoo1","roman","hr",2000)
obj1.printDetails()