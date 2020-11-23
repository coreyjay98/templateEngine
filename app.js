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

function rolePrompt(num) {
  if (num <= 7) {
    inquirer.prompt(roleQuestion).then((answers) => {
      employeePrompts(answers.jobRole);
    });
  } else {
    console.log("Sorry, Max employee number!");
  }
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
      if (answers.restart === "Yes" && counter <= 7) {
        rolePrompt(counter);
      } else if (answers.restart === "Yes" && counter > 7) {
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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

module.exports = employees;
