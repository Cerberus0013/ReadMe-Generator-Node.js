






// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

<br />
<p align="center">
<a href="https://github.com/${readmeData.github}">Github</a><
<img src="./assets/images/download.jpg"  alt="Logo" width="80" height="" >
</a>

<h3 align="center">${readmeData.github}</h3>

<p align="center">
  
<br />
<a href="https://github.com/${readmeData.github}">Github</a><><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/${readMe.github}">Github</a><View Demo</a>
        ·
<a href="https://github.com/${readMe.github}">Github</a><Report Bug</a>
        ·
<a href="https://github.com/${readMe.github}">Github</a><Request Feature</a>
</p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li><a href="#about-the-project">About The Project</a></li>
<li><a href="#project-links">Project Links</a></li>
<li><a href="#contact">Questions</a></li>
</ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

${readMe.description}

<a href = ${readMe.screenShotURL}


Features:



<!-- PROJECT LINKS -->
## Project Links

Repository Link: [https://github.com/Cerberus0013/timed-quiz](https://github.com/Cerberus0013/timed-quiz)

<!-- Questions -->
## Questions

Name: ${readMe.name} ; Email: ${ReadMe.email}

${readMe.link}

<h4 class="text-dark">&copy; ${new Date().getFullYear()} by ${ReadMe.name}</h4>

##License

${readMe.license}

##Badges

${readMe.badges}


`;
}

module.exports = generateMarkdown;
























// module.exports= (reademeData) => {
//  const{readMe} = reademeTemplate
//   console.log(reademeTemplate)
// return`
// <br />
// <p align="center">
// <a href="https://github.com/${readmeData.github}">Github</a><
// <img src="./assets/images/download.jpg"  alt="Logo" width="80" height="" >
// </a>

// <h3 align="center">${readmeData.github}</h3>

// <p align="center">
  
// <br />
// <a href="https://github.com/${readmeData.github}">Github</a><><strong>Explore the docs »</strong></a>
// <br />
// <br />
// <a href="https://github.com/${readMe.github}">Github</a><View Demo</a>
//         ·
// <a href="https://github.com/${readMe.github}">Github</a><Report Bug</a>
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

