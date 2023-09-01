import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';

  let index = true;
  let points = 0;  

 async function numberGuesss () {
    while(index){
let genrateNum = Math.ceil((Math.random()*3)+ 1);
     let User = await inquirer.prompt([
        {
            name:'UserNumber1',
            type:'number',
            message:'Enter a Number Between 1 to 4'
        }
     ])
     if(User.UserNumber1 === genrateNum ){
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
  }, 1000)