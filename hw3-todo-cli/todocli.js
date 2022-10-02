const readline = require("readline")
let tasks = [['☐','make breakfast'], ['☐','strip the spare bed']];

//console.log("Welcome to Todo CLI \n \n  -------------------- \n \n  (v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")

const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
    prompt: "\n (v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit \n \n >" 
    })


let command = process.argv[2][0];

switch (command){
    case 'v':
        viewItem() 
        break;
    case 'c':
        completeItems(process.argv[2][1]) // might have to turn this into slice later, in case we get to double digits
        break;
    case 'n':
        newItem()
        break;
    case 'd':
        deleteItem(process.argv[2][1]) // might have to turn this into slice later, in case we get to double digits
        break;
    case 'q':
        quit() 
        break;
    default:
        console.log("Did ya wanna try that again? \n \n(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
        //r1.prompt()
}
    
function viewItem(){
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i].join(" "))  
    }
    rl.prompt()
    //From the Todo Menu, pressing v then Enter should display the contents of the todo
    // list then the Todo Menu again. 
    //When displaying the list, completed items should have a checkmark (i.e. `✓`) besides their title. For example:
    }

function newItem(){
    rl.question("What new item would you like to add to the list? \n", (newitem) => {
        //viewItem()

        tasks.push(["☐",newitem])
        console.log(`'${newitem}' has been added to your to-do list`)
        viewItem()
        rl.close()
        })  
    }

//From the Todo Menu pressing n then Enter should ask the user what item to add to the list. 
//The user can then write a response. Save their response as a new item at the end of the todo list.
    

function completeItems(checkOff){
    //☑
    console.log(`Marking: '${tasks[checkOff][1]}' complete...\n`)
    tasks[checkOff][0] = "☑"

    //setting the timeout just because I think it looks a bit more polished

    setTimeout(function() {
        console.log("Success! Here is your updated list: \n")
        viewItem()
    }, 1500);


  
  
    //From the Todo Menu pressing cX where X refers to the index of a Todo item then Enter should mark that item as complete. 
    //Tell the user which item was marked. Then, re-display the Todo Menu
    }

function deleteItem(toDelete){
    console.log("deleteitem", process.argv[2][1])
    // /From the Todo Menu pressing dX where X refers to the index of a Todo item then `Enter` 
    //should remove that from the list. Tell the user which item was deleted. Then, re-display the Todo Menu.
    viewItem()
    }

function quit(){
    //From the Todo Menu pressing q quits the application. Say farewell.
    console.log("Finished already? Great work! See you soon😃")
    rl.close()
    }

//console.log(tasks)

    //on() -- first arg should be the name of the event as a string, second arg-- the listener callback function
    
// rl.on("line", (command) => {
//     console.log("Welcome to TODO CLI! \n \n ---------------------------- \n \n (v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")

//     if (command == 'v'){
//         console.log("Nope! Try again")
//         attempts++
//         rl.prompt()
    
        
//     } else if (command == 'q'){ {
//         console.log(`Guessed ${guess} correctly in ${attempts} attempts!`)
//         rl.close()
//     }
// })

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



let input = process.argv[2][0];
// switch (input){
//     case 'v':
//         console.log("view") // change to a function call when functions are set up
//         break;
//     case 'c':
//         console.log("complete") // change to a function call when functions are set up, add processargv[2][1] as argument?
//         break;
//     case 'n':
//         console.log("new") // change to a function call when functions are set up
//         break;
//     case 'd':
//         console.log("delete") // change to a function call when functions are set up, add processargv[2][1] as argument?
//         break;
//     case 'q':
//         console.log("quit") // change to a function call when functions are set up
//         break;
//     default:
//         console.log("Did ya wanna try that again? \n \n(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
//         r1.prompt()
// }
    

   
  


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




// stretch: https://nodejs.org/docs/latest-v15.x/api/readline.html#readline_example_read_file_stream_line_by_line