let employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printForm = function() {
        console.log(this.name, this.jobTitle, this.salary, this.status)
    }
}

let winter = new Employee("Winter", "Botanist", "70,000", "Contract");
let lori = new Employee("Lori", "Gardner", "45,000", "fullTime");
let clark = new Employee("Clark", "Manager", "65,000", "fullTime");

winter.status = "Part Time"

employees.push(winter, lori, clark);
console.log(employees)


console.log(winter)
console.log(lori)
console.log(clark)

winter.printForm()
lori.printForm()
clark.printForm()
