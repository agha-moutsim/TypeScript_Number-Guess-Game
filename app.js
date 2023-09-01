import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';
// let score = 0;
// let main = true;
// async function numberGuess() {
//   while (main) {
//     let randomNumber = Math.ceil(Math.random() * 3) + 1;
//     let answer = await inquirer.prompt([
//       {
//         name: 'UserNumber',
//         type: 'number',
//         message: 'Enter a number between 1 to 4',
//       },
//     ]);
//     if (answer.UserNumber === randomNumber) {
//       console.log(chalk.greenBright('You Guessed The Right Number'));
//       score += 10;
//       console.log(chalk.bgMagenta(`Your Score is: ${score}`));
//     } else {
//       console.log(chalk.blueBright('Try Again'));
//     }
//     main = false;
//   }
// }
// showBanner('Guessing Game', 'This is a suitable Tagline', 'green');
// setTimeout(() => {
//   numberGuess(); 
// }, 1000);
let index = true;
let points = 0;
async function numberGuesss() {
    while (index) {
        let genrateNum = Math.ceil((Math.random() * 3) + 1);
        let User = await inquirer.prompt([
            {
                name: 'UserNumber1',
                type: 'number',
                message: 'Enter a Number Between 1 to 4'
            }
        ]);
        if (User.UserNumber1 === genrateNum) {
            console.log(chalk.bgYellowBright('Your Guess Is Right'));
            points += 10;
            console.log(chalk.blueBright(`Your Score Is This ${points}`));
        }
        else {
            console.log(chalk.bgRedBright('Please Try Again'));
        }
        index = false;
    }
}
showBanner('Guessing Game', 'This is a suitable Tagline', 'green');
setTimeout(() => {
    numberGuesss();
}, 1000);
