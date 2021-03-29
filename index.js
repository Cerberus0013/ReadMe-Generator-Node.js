const inquirer = require('inquirer');
// const fs = require('fs');
// const readmeGenerator = require('./src/page-template.js')


// const readMe = readmeGenerator()


// fs.writeFile('./README.md', readmeGenerator (), err => {
//         if (err) throw err;

//     console.log('Readme Complete')
// })

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your Project?",
    },
  ])
  .then((answers) => console.log(answers))
  
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
    ])
    .then((answers) => console.log(answers))
    
    inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
        },
      ])
      .then((answers) => console.log(answers))
      
      inquirer
        .prompt([
          {
            type: "input",
            name: "github",
            message: "What is your Github username?",
          },
        ])
        .then((answers) => console.log(answers));