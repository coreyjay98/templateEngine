const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const questions = require("./lib/questions");
const {
  roleQuestion,
  employeeQuestions,
  nextEmployee,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");

let employees = [];
let counter = 0;
function managerPrompt() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    rolePrompt(counter);
  });
}

function rolePrompt() {
  inquirer.prompt(roleQuestion).then((answers) => {
    employeePrompts(answers.jobRole);
  });
}

function employeePrompts(role) {
  inquirer
    .prompt(role === "Engineer" ? engineerQuestions : internQuestions)
    .then((answers) => {
      counter += 1;
      if (role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );
        employees.push(engineer);
      } else if (role === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
      }
      if (answers.restart === "Yes" && counter <= 4) {
        rolePrompt(counter);
      } else if (answers.restart === "Yes" && counter >= 5) {
        console.log("Sorry, Max employee number!");
        console.log("employeeStorage", employees);
        console.log("counter", counter);
        fs.writeFileSync(outputPath, render(employees));
        // render the html with the instances
      } else {
        console.log("Finished");
        console.log("employeeStorage", employees);
        console.log("counter", counter);
        fs.writeFileSync(outputPath, render(employees));
      }
    });
}

managerPrompt();

module.exports = employees;
