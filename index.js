// This guess the number game is a short TypeScript/Node.js project that allows the user to guess the number generated by the computer.
//  There are also several ways to alter the game, like adding more rounds or displaying the score. It’s quite simple and uses 
//  the random function to generate a number.
// Create a GitHub repository for the project and submit its URL in the project submission form.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("Number Guessing Game"));
console.log(chalk.redBright("Rules: You have 3 lives to guess the correct Number!!!"));
console.log(chalk.redBright("Guess number from 1 to 10"));
// setTimeout(() => {
//         console.log(chalk.redBright("Lets start the game"));
//     }, 2000);
console.log(chalk.redBright("Lets start the game"));
let num = Math.ceil(Math.random() * 10);
let lives = 3;
console.log(num);
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess the number",
        },
    ])
        .then(async (answers) => {
        if (lives > 1 && answers.guess == num) {
            console.log("You have guessed the right number");
        }
        else if (lives > 1 && answers.guess != num) {
            lives--;
            console.log("Wrong guess!!! Try Again");
            console.log(`${lives} life left`);
            await askQuestion();
        }
        else {
            console.log(`${--lives} life left`);
            console.log("You lost");
            console.log("Correct number was: " + num);
        }
    });
}
async function continueChoice() {
    do {
        await askQuestion();
        var choice = await inquirer.prompt({
            type: "input",
            name: "qa",
            message: chalk.bgGrey("Do you want to play again? Press Y or y for Yes")
        });
        num = Math.ceil(Math.random() * 10);
        lives = 3;
    } while (choice.qa == 'yes' || choice.qa == 'Yes' || choice.qa == 'YES' || choice.qa == 'y' || choice.qa == 'Y');
}
continueChoice();
