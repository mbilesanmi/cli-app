var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var axios = require('axios');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Simple CLI App', { horizontalLayout: 'full' })
    )
);


axios.get("http://xkcd.com/info.0.json")
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });