const fs = require('fs');
const readmeGenerator = require('./src/page-template.js)
const inqurier = require('inquirer');



fs.writeFile('./README.md', readmeGenerator (), err => {

})