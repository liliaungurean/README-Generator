function fileGenerator(response){
    return `
    <h1 alight='center'> ${response.title}</h1>

    ## Table Of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    
    ## 🔍Description
     ${response.description}

    ## 💾Instalation
     ${response.description}

    ## 💻Usage
     ${response.usage}

    ## Contributors
    ${response.contributors}

    ## ✏️Test
     ${response.test}

    ## License
    ![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)
    <br />
    This application is covered by the ${response.license} license. 

    ## ✋Questions
     ${response.qestions}<br/>
    <br/>
    Find me on GitHub: [${response.github}](https://github.com/${response.github}) <br/>
    <br/>
    Email me is you have any questions: ${response.email}<br/>
    <br/>
    `;
}

module.exports = fileGenerator;