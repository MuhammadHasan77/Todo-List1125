import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blackBright.bold.bgBlueBright("\t\tHello !!! How are you? Welcome to MuhammadHasan77 Todo-list"));
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.bold.yellowBright("What you want to add in your Todos?"),
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.bold.redBright("Do you want to add more?"),
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
console.log(chalk.bold.greenBright("Your list is complete..."));
/*understanding Arrays:
let icecreamFlavors = ["chocolate", "cheesecake", "coffee", "cookies n cream"]; //making an array
console.log (icecreamFlavors);
icecreamFlavors.push("vanilla"); //adding elements to array using .push()
console.log (icecreamFlavors);
icecreamFlavors.pop(); //removing last element of array using .pop()
console.log (icecreamFlavors);
icecreamFlavors = icecreamFlavors.concat(["butter pecan", "caramel"]); //concatinating multiple elements to array
console.log (icecreamFlavors); */
/*understanding while loop:
general structure = while(condition){code to be executed} "the code is executed until the condition is true"
let i = 0
while(i <= 10){
    i++;
    console.log(i);
}; */ 
