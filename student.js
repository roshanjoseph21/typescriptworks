var Student = /** @class */ (function () {
    function Student(roll, name, course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
    Student.prototype.printDetails = function () {
        console.log(this.roll, this.name, this.course);
    };
    return Student;
}());
var st = new Student("2133", "IRON MAN", "JARVIS TECH");
st.printDetails();
