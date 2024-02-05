class Student{
    roll:string
    name:string
    course:string

    constructor(roll:string,name:string,course:string){
        this.roll=roll
        this.name=name
        this.course=course
    }
    printDetails(){
        console.log(this.roll,this.name,this.course);
        
    }
}

const st=new Student("2133","IRON MAN","JARVIS TECH")
st.printDetails()