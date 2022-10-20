var fileGenerator = require("./fileGenerator").default;
var fs = require('fs');
var inquirer = require('inquirer');

// questions //
let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title",
    }, {
        type: "input",
        message: "Give a breif description of your project!",
        name: "description",
    }, {
        type: "input",
        message: "motivation?",
        name: "motivation",
    }, {
        type: "input",
        message: "installation/test instructions?",
        name: "install",
    }, {
        type: "confirm",
        message: "Contributions?",
        name: "contributions",
        options: [
            "yes",
            "no",
        ]
    }, {
        type: "input",
        message: "If yes then who?",
        name: "contributions2",
    }, {
        type: "list",
        message: "What are the lincenses?",
        name: "license",
        choices: [
            "MIT",
            new inquirer.Separator(),
            "none",
        ]
    }, {
        type: "input",
        message: "Github username?",
        name: "userName",
    }, {
        type: "input",
        message: "Github profile?",
        name: "gitProfile",
    }, {
        type: "input",
        message: "Email?",
        name: "email",
    }
];


inquirer.prompt(questions).then(function (response) {
    console.log(response);

    var content = fileGenerator(response);
    console.log(content);
    fs.writeFile("./ReadMe.md", content, function (err) {
        if (err) throw err
        console.log("sucess");
    });
});