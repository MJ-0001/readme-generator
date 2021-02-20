// Function to generate the markdown file
function generateMarkdown(data) {
  // Returns a license badge based on the license passed in
  function licenseBadge() {
    if (data.license == 'Apache') {
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    }
    else if (data.license == 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    }
    else if (data.license == 'BSD 2') {
      return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
    }
    else if (data.license == 'BSD 3') {
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    }
    else if (data.license == 'none') {
      return ''
    }
  }
  
  // Returns link to further license information
  function licenseLink() {
    if (data.license == 'Apache') {
      return 'https://opensource.org/licenses/Apache-2.0';
    }
    else if (data.license == 'MIT') {
      return 'https://opensource.org/licenses/MIT';
    }
    else if (data.license == 'BSD 2') {
      return 'https://opensource.org/licenses/BSD-2-Clause';
    }
    else if (data.license == 'BSD 3') {
      return 'https://opensource.org/licenses/BSD-3-Clause';
    }
    else if (data.license == 'none') {
      return ''
    }
  }

  return `
  # ${data.title}

  # Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Instructions](#instructions)
  - [Credits](#credits)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ---

  ## Description:
  
  ${data.description}
  
  ---

  ## Installation:
  ${data.install}

  ---
  ## Instructions for use:
  ${data.instructions}

  ---
  ## Credits:
  ${data.credits}

  ---
  ## Contributions:
  ${data.contributions}

  ---
  ## Tests:
  
  ${data.tests}
  
  ---
  ## Questions:  
  If you have any questions please find my Github username and my email address below:  

  * ${data.git}
  * ${data.email}

  ---
  ## License:  

  ${data.license}  

  ${licenseBadge()}  

  ${licenseLink()}
 
  ---`;

}

module.exports = generateMarkdown;


