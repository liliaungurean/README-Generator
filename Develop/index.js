// Include packages needed for this application
const fileGenerator = require("./fileGenerator");
const fs = require ("fs");
const inquirer = require('inquirer');
 

(async () => {
    const { fileTypeFromFile } = await (eval('import("file-type")') as Promise<typeof import('file-type')>);
  
    const type = await fileTypeFromFile('fixture.skp');
    console.log(type);
  })();

  
// Create an array of questions for user input
const questions= [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a description about why project. Why did you create this project?',
        name: 'description',
    },
    {
        type: 'input', 
        messgae: 'Are there any step required to instal this project?',
        name: 'instalation',
    },
    {
        type: 'input',
        message: 'What is this project unseful for?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are the contributors to this project?',
        name: 'contributors',
    },
    {
        type: 'inout',
        message: 'Please state any test(s) required',
        name: 'test',
    },
    {
        type: 'list',
        message: "Choose a license for this porject.",
        name: 'license',
        choices: [
            'MIT License (MIT)',
            'Apache License 2.0 (Apache-2.0)',
            'GNU General Public License (GPL)',
            'Berkeley Software Distribution License (BSD)',
            'Internet Systems Consortium License (ISC)',
            'Microsoft Public Licenses (Ms-PL)',
            'Common Development and Distribution License (CDDL)',
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input', 
        message: 'What is your Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'How can I contact you if I have nay questions?',
        name: 'contact',
    },
]


// Create a function to write README file
inquirer.prompt(questions).then(function(response){
    console.log(response);
    
    const content = fileGenerator(response);
    console.log(response);

    fs.writeFile("./ReadMe.md", content, function(err){
    err ? console.error(err) : console.log('Success!')
    });
})
