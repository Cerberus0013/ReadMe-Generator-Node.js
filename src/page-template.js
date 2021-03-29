const readmeGenerator = (name, github) => {
return
`<br />
<p align="center">
  <a href="https://github.com/${github}">Github</a><
    <img src="./assets/images/download.jpg"  alt="Logo" width="80" height="" >
  </a>

  <h3 align="center">Quiz Time</h3>

  <p align="center">
  Timed Quiz Challenge
        <br />
        <a href="https://github.com/${github}">Github</a><><strong>Explore the docs »</strong></a>
        <br />
        <br />
       <a href="https://github.com/${github}">Github</a><View Demo</a>
        ·
       <a href="https://github.com/${github}">Github</a><Report Bug</a>
        ·
       <a href="https://github.com/${github}">Github</a><Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li><a href="#about-the-project">About The Project</a></li>
<li><a href="#project-links">Project Links</a></li>
<li><a href="#contact">Contact</a></li>
</ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<a href = ${screenshotURL}


Features:



<!-- PROJECT LINKS -->
## Project Links

Hosted Link: [https://cerberus0013.github.io/timed-quiz/](https://cerberus0013.github.io/timed-quiz/)

Repository Link: [https://github.com/Cerberus0013/timed-quiz](https://github.com/Cerberus0013/timed-quiz)

<!-- CONTACT -->
## Contact

Name: ${name} ; Email: ${email} 

`
}


module.exports = readmeGenerator
