const fs = require('fs');
const readmeGenerator = require('./src/page-template.js')
const inquirerr = require('inquirer');



fs.writeFile('./README.md', readmeGenerator (), err => {

})