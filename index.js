const inquirer = require("inquirer");
const fs = require('fs');
const readmeGenerator = require('./src/page-template.js')

// const readMe = readmeGenerator()

// fs.writeFile('./README.md', readmeGenerator (), err => {
//         if (err) throw err;

//     console.log('Readme Complete')
// })

const readMeInfo = (readMeData) => {
 console.log(`
  ++++++++++++++++++++
  Create a ReadMe
  ++++++++++++++++++++`)
  
 if(!readMeData){
   readMeData = []
 }

  return inquirer.prompt([

  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "imput",
    name: "name",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What did you build this project with? (check all that apply)",
    choices: [
        "Javascript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the Gihub link to you project (Required)",
    },
  ])
//   .then(readMeData => {
//   push(storeData);   
// });
}



readMeInfo()
     .then(readMeData => {
       const readMe = readmeGenerator(readMeData)
     });
