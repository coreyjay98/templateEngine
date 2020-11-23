// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const { internQuestions } = require("./questions");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    console.log(this.school);
  }
  getRole() {
    console.log("Intern");
    return this;
  }
}

module.exports = Intern;
