const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const roleQuestion = [
  {
    type: "list",
    name: "jobRole",
    message: "What is your role at the company?",
    choices: ["Engineer", "Intern"],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Company ID Number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your Office Number?",
  },
];
const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Company ID Number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Company ID Number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "list",
    choices: ["Yes", "No"],
    name: "restart",
    message: "Do you wish to add another employee?",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Company ID Number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What School do you attend?",
  },
  {
    type: "list",
    choices: ["Yes", "No"],
    name: "restart",
    message: "Do you wish to add another employee?",
  },
];

const nextEmployee = {
  type: "list",
  choices: ["Yes", "No"],
  name: "restart",
  message: "Do you wish to add another employee?",
};

module.exports = {
  roleQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  nextEmployee,
};
