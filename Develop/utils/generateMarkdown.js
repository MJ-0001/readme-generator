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
  # Table of Contents
  - [description](#description)
  - [install](#install)
  - [instructions](#instructions)
  - [credits](#credits)
  - [license](#license)
  - [contributions](#contributions)
  - [tests](#tests)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.install}

  ## Instructions for use:
  ${data.instructions}

  ## Credits:
  ${data.credits}

  ## License:
  ![https://]${data.license}

  ## Contributions:
  ${data.contributions}

  ## Tests:
  ${data.tests}


  
  
  `;

}

module.exports = generateMarkdown;