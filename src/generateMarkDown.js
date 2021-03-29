






// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== 'none'){
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
} 
return ``

} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license !== 'none'){
  return `1. [License](#license) `
} 
return `` 

}  


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== none){
  return `## License

  This Project is licesned under ${license}`
} 
return `` 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}





<!-- TABLE OF CONTENTS -->
<details open="open">
<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li><a href="#about-the-project">About The Project</a></li>
<li><a href="#project-links">Project Links</a></li>
<li><a href="#contact">Questions</a></li>
${renderLicenseLink(data.license)}
</ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

${data.description}

${data.screenShotURL}


Features:

${data.languages}

<!-- PROJECT LINKS -->
## Project Links



<!-- Questions -->
## Questions

Name: ${data.name} ; Email: ${data.email}

${data.link}

<h4 class="text-dark">&copy; ${new Date().getFullYear()} by ${data.name}</h4>

${renderLicenseSection()}

${renderLicenseBadge(data.license)}

## Badges

${data.badges}


`;
}

module.exports = generateMarkdown;
























// module.exports= (reademeData) => {
//  const{data} = reademeTemplate
//   console.log(reademeTemplate)
// return`
// <br />
// <p align="center">
// <a href="https://github.com/${dataData.github}">Github</a><
// <img src="./assets/images/download.jpg"  alt="Logo" width="80" height="" >
// </a>

// <h3 align="center">${dataData.github}</h3>

// <p align="center">
  
// <br />
// <a href="https://github.com/${dataData.github}">Github</a><><strong>Explore the docs »</strong></a>
// <br />
// <br />
// <a href="https://github.com/${data.github}">Github</a><View Demo</a>
//         ·
// <a href="https://github.com/${data.github}">Github</a><Report Bug</a>
//         ·
// <a href="https://github.com/${readMe.github}">Github</a><Request Feature</a>
// </p>
// </p>



// <!-- TABLE OF CONTENTS -->
// <details open="open">
// <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
// <ol>
// <li><a href="#about-the-project">About The Project</a></li>
// <li><a href="#project-links">Project Links</a></li>
// <li><a href="#contact">Questions</a></li>
// </ol>
// </details>



// <!-- ABOUT THE PROJECT -->
// ## About The Project

// ${readMe.description}

// <a href = ${readMe.screenShotURL}


// Features:



// <!-- PROJECT LINKS -->
// ## Project Links

// Repository Link: [https://github.com/Cerberus0013/timed-quiz](https://github.com/Cerberus0013/timed-quiz)

// <!-- Questions -->
// ## Questions

// Name: ${readMe.name} ; Email: ${ReadMe.email}

// ${readMe.link}

// <h4 class="text-dark">&copy; ${new Date().getFullYear()} by ${ReadMe.name}</h4>

// ##License

// ${readMe.license}

// ##Badges

// ${readMe.badges}


// `;
// }

