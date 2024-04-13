#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
console.log(chalk.blackBright.bold.bgBlueBright("\t\tHello !!! How are you? Welcome to MuhammadHasan77 Todo-list"));
while (true) {
    console.log();
    let operation = await inquirer.prompt([
        {
            type: "list",
            name: "op",
            message: chalk.bold.yellowBright("What operation do you want to perform?"),
            choices: ["Add Task", "Remove Task", "View List", "Exit"],
        },
    ]);
    if (operation.op == "Add Task") {
        let todo = await inquirer.prompt([
            {
                type: "input",
                name: "task",
                message: chalk.bold.greenBright("What do you want to include in the todo list? "),
            },
        ]);
        todoList.push(todo.task);
    }
    else if (operation.op == "View List") {
        if (todoList.length == 0) {
            console.log(chalk.bold.redBright("Empty List"));
        }
        else {
            console.log(chalk.underline.bold.bgWhite("TODO LIST :"));
            for (let i = 0; i < todoList.length; i++) {
                console.log(i + 1 + "- " + todoList[i]);
            }
        }
    }
    else if (operation.op == "Remove Task") {
        if (todoList.length == 0) {
            console.log(chalk.bold.redBright("No task can be removed i.e. list is empty"));
        }
        else {
            console.log(chalk.underline.bold.bgWhite("TODO LIST :"));
            for (let i = 0; i < todoList.length; i++) {
                console.log(i + 1 + "- " + todoList[i]);
            }
            let choseTask = await inquirer.prompt([
                {
                    type: "number",
                    name: "remove",
                    message: chalk.bold.yellowBright("Which task do you want to remove? Note : Enter only number "),
                },
            ]);
            for (let k = 0; k < todoList.length; k++) {
                if (k + 1 == choseTask.remove) {
                    todoList.splice(choseTask.remove - 1, 1);
                }
            }
            console.log(chalk.bold.bgGreenBright("The updated list is : "));
            if (todoList.length == 0) {
                console.log(chalk.bold.redBright("Empty List"));
            }
            else {
                for (let i = 0; i < todoList.length; i++) {
                    console.log(i + 1 + "- " + todoList[i]);
                }
            }
        }
    }
    else if (operation.op == "Exit") {
        break;
    }
}
console.log(chalk.bold.greenBright("Byyy!!! Take Care..."));
