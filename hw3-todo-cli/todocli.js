const readline = require("readline")
let tasks = [];

function viewItem(){
    console.log("viewitem")
    //From the Todo Menu, pressing v then Enter should display the contents of the todo
    // list then the Todo Menu again. 
    //When displaying the list, completed items should have a checkmark (i.e. `✓`) besides their title. For example:

// should probably be an array
    }

function newItem(){
    console.log("newitem")
    // push an item to the tasks item

//From the Todo Menu pressing n then Enter should ask the user what item to add to the list. 
//The user can then write a response. Save their response as a new item at the end of the todo list.
    }

function completeItems(){
    console.log("completeitems")
    //From the Todo Menu pressing cX where X refers to the index of a Todo item then Enter should mark that item as complete. 
    //Tell the user which item was marked. Then, re-display the Todo Menu
    }

function deleteItem(){
    console.log("deleteitem")
    // /From the Todo Menu pressing dX where X refers to the index of a Todo item then `Enter` 
    //should remove that from the list. Tell the user which item was deleted. Then, re-display the Todo Menu.
    }

function quit(){
    //From the Todo Menu pressing q quits the application. Say farewell.
    console.log("Finished already? Great work! See you soon😃")
    rl.close()
    }

const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
    prompt: "(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit \n \n >" 
    })


    //on() -- first arg should be the name of the event as a string, second arg-- the listener callback function
function readCommand(){
rl.on("Welcome to TODO CLI! \n \n ---------------------------- \n \n (v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit"), (command) => {
    r1.prompt()

console.log(input)

// function readCommand(){
//     let input = process.argv[2][0];
//     switch (input){
//             case 'v':
//                 console.log("view") // change to a function call when functions are set up
//                 break;
//             default:
//                 console.log("Did ya wanna try that again? \n \n(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
//                 r1.prompt();
// }
// }


switch (input){
    case 'v':
        console.log("view") // change to a function call when functions are set up
        break;
    case 'c':
        console.log("complete") // change to a function call when functions are set up, add processargv[2][1] as argument?
        break;
    case 'n':
        console.log("new") // change to a function call when functions are set up
        break;
    case 'd':
        console.log("delete") // change to a function call when functions are set up, add processargv[2][1] as argument?
        break;
    case 'q':
        console.log("quit") // change to a function call when functions are set up
        break;
    default:
        console.log("Did ya wanna try that again? \n \n(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
        r1.prompt()
}
    
}
   
  


            // if (commandsArr[2][0]== "f"){
            //     turtle = turtle.forward(commandsArr[i][1])
            // } else if (commandsArr[i][0]== "r") {
            //     turtle = turtle.right()
            // } else if (commandsArr[i][0]== "l") {
            //     turtle = turtle.left()
            // } else if (commandsArr[i][0]== "t"){
            //     turtle = new Turtle(commandsArr[i][1],commandsArr[i][3])
            // } else {
            //     console.log("Whoops, try again. Enter something like 't0,4-f3-l-f3-r-f5-r-f8-r-f5-r-f3-l-f3'")
            // }
        
        //turtle.print()
    





// rl.on("Whelcome to TODO CLI! \n \n "----------------------------", (answer) => {
//     // answer is what the user enters
//     console.log(`Eww! I hate ${answer}`);
//     rl.close() // without this it will just hang in the environment
//   })




// function stretch() {
//     // taking the arguments, splitting them into an array separated by the dashes

//     let commands = process.argv.slice(2);
//     commands = commands.toString()
//     let commandsArr = commands.split("-")


//     //this iterate through and convert each shorthand command to a function call, eg.f10 will be .forward(10)
//     let turtle = new Turtle(0,0); //setting a default value

readCommand()




