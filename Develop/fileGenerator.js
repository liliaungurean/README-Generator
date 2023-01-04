function fileGenerator(response){
    return `
    <h1 alight='center'> ${answer.title}</h1>

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
    
## Description
🔍 ${answer.description}

## Instalation
💾 ${answer.description}

## Usage
💻 ${answer.usage}

## Contributors
${answer.contributors}

## Test
✏️ ${answer.test}

## License
![badge](https://img.shields.io/badge/license-${answer.license}-brightgreen)
<br />
This application is covered by the ${answer.license} license. 

## Questions
✋ ${answer.qestions}<br/>
<br/>
Find me on GitHub: [${answer.github}](https://github.com/${answer.github}) <br/>
<br/>
Email me is you have any questions: ${answer.email}<br/>
<br/>
    `;
}

module.export = fileGenerator;