import inquirer from "inquirer";

let todos : string [] = [];
let condition = true;



while(condition){
let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "input",
            message: "Please enter todo tasks:"

        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add other task in the list:",
            default: "false"
        }

    ]
);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
}