var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setEmployee = function (code, name, department, salary) {
        this.code = code;
        this.name = name;
        this.department = department;
        this.salary = salary;
    };
    Employee.prototype.printDetails = function () {
        console.log(this.name, this.department, this.salary);
    };
    return Employee;
}());
var obj1 = new Employee();
obj1.setEmployee("eoo1", "roman", "hr", 2000);
obj1.printDetails();
