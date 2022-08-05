function renderLicenseBadge(license) {
    if (license !== "None") {
        return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="Github license">`;
    }

    return "";
}
function renderLicenseLink(license) {
    if (license !== "None") {
        return `* [license](#license)`
    }
    return "";
}
function renderLicenseSection(license) {
    if (license !== "None") {
        return `## License \nThis project is licensed under the ${license} license`
    }
    return "";
}

function generateMarkdown(data) {
    return `# ${data.title}
 ${renderLicenseBadge(data.license)} 
     
## Description:

${data.description}

## Table of Contents:

* [installation](#installation)

* [usage](#usage)

 ${renderLicenseLink(data.license)}

 * [contribution](#contribution)

 * [test](#test)

 * [questions](#questions)
    
## Installation:

${data.installation}

## Credits:

${data.credits}
   
## Usage:

 ${data.usage}
     
${renderLicenseSection(data.license)}

## Contribution:

${data.contributions}
    
## Test:

${data.tests}
     
## Questions:

If you have any questions about the repo, open an issue or contact me directly at ${data.email}
You can find more of my work at [${data.github}](https://github.com/${data.github})

 `
}

module.exports = generateMarkdown
