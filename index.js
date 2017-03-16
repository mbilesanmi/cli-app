var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');
var axios = require('axios');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Simple CLI App', { horizontalLayout: 'full' })
    )
);

axios.get("http://xkcd.com/info.0.json")

    .then(function (response) {
        var resultObj = response.data;
        console.log(chalk.cyan.italic("Issue date: " + resultObj.day + " " + resultObj.month + " " + resultObj.year));
        console.log(chalk.yellow.italic("Issue title: " + resultObj.title));
        console.log(chalk.red.italic("Issue image url: " + resultObj.img));
        console.log(chalk.green.italic("Issue number: " + resultObj.num));
    })
    .catch(function (error) {
        console.log(error);
    });
