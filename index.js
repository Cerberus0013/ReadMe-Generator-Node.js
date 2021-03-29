const inquirer = require("inquirer");
const fs = require('fs');
const readmeGenerator = require('./src/generateMarkDown.js')

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
      name: "title",
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
      message: "Provide a description of the project.",
    },
    {
      type: "input",
      name: "screenShotURL",
      message: "Please provides the URL for a screenshot of your project",
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
      type: "checkbox",
      name: "license",
      message: "What type of License are you using (check all that apply)",
      choices: ["MIT LIcense", "Apache License 2.0", "GNU GPLv3", "ISC"],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the Gihub link to you project (Required)",
      validate: (linkInput) => {
        if (linkInput) {
          return true;
        } else {
          console.log("Please enter your Github Link");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "badges",
      message: "Please list any Badges that you might have",
    },
  ]);
//   .then(readMeData => {
//   push(storeData);   
// });
}



readMeInfo()
     .then((readMeData) => {
       console.log(readMeData)
       const readMe = readmeGenerator(readMeData);


      fs.writeFile('./ReadME.md', readMe, err => {
     if (err) throw new Error(err);
      console.log('ReadMe created! Check out ReadMe.Md in this directory!')
    });
  });
