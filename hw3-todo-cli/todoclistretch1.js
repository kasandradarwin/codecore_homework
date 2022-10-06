const readline = require("readline");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const path = process.argv.slice(2);
const tasks = [] //[['[ ]','make breakfast'],['[ ]','make breakfast'],['[ ]','make breakfast'],['[ ]','make breakfast']];
//let stringDelete = ""

    

const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
    prompt: "\n >" 
    })

function welcome(){
    console.log("Welcome to Todo CLI \n \n  -------------------- \n \n")
    commandList()
    //console.log(commandList())
    //rl.prompt()
}

function commandList(){
    console.log(" \n (v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit \n \n")
}


rl.on('line', (command) => {
    switch (command[0]){
        case 'v':
            console.log("\n \n 👉 View 👈\n \n")
            viewItem() 
            break;
        case 'c':
            console.log("\n \n 👉 Mark Complete 👈\n \n ")
            completeItems(command.slice(1)) // might have to turn this into slice later, in case we get to double digits
            break;
        case 'n':
            console.log("\n \n 👉 Add New List Item 👈\n \n ")
            newItem()
            break;
        case 'd':
            console.log("\n \n 👉 Delete a List Item 👈\n \n ")
            deleteItem(command.slice(1)) // might have to turn this into slice later, in case we get to double digits
            break;
        case 'q':
            console.log("\n \n 👉 Quit 👈\n \n ")
            quit() 
            break;
        default:
            console.log("Hmm... that didn't work. Did ya wanna try that again? \n \n(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
            //r1.prompt()
    }
});

    
function viewItem(){
    if (tasks.length > 0){
        setTimeout(function() {
        console.log("📝 To Do List\n")
        for (let i = 0; i < tasks.length; i++) {
            console.log(i, tasks[i].join(" "))  
        }
        commandList()
        }, 500)
        } else {
        console.log("Your To Do list is empty, you can add an item but pressing 'n'")

    }

    //From the Todo Menu, pressing v then Enter should display the contents of the todo
    // list then the Todo Menu again. 
    //When displaying the list, completed items should have a checkmark (i.e. `[✓]`) besides their title.
    }

function newItem(){
    rl.question("What new item would you like to add to the list? \n", (newitem) => {

        tasks.push(["[ ]",newitem])

        setTimeout(function() {
            console.log(`\n \n ✅${newitem} has been added to your to-do list\n \n`)
        commandList()
        }   , 500);
        })  
    }

//From the Todo Menu pressing n then Enter should ask the user what item to add to the list. 
//The user can then write a response. Save their response as a new item at the end of the todo list.
   
function completeItems(checkOff){
    if (tasks.length == 0){
        console.log("Your To Do list is empty, you can add an item but pressing 'n'")
    } else {
        try{
            //setTimeout(function() {
            console.log(`Marking: '${tasks[checkOff][1]}' complete...\n`)
            tasks[checkOff][0] = "[✓]"
           // }, 1000);

            //setting the timeout just because I think it looks a bit more polished

            setTimeout(function() {
                console.log("✅ Success! Here is your updated list: \n \n")
                viewItem()
            }, 1000);
        } catch(err) {
            console.log(`🥹 Whoops, that index doesn't correspond with an item in the list-- try one of these!`)
            console.table(tasks)
    }
}
    
    //From the Todo Menu pressing cX where X refers to the index of a Todo item then Enter should mark that item as complete. 
    //Tell the user which item was marked. Then, re-display the Todo Menu
    }

  
//     //From the Todo Menu pressing cX where X refers to the index of a Todo item then Enter should mark that item as complete. 
//     //Tell the user which item was marked. Then, re-display the Todo Menu
//     }

function deleteItem(toDelete){
    if (tasks.length == 0){
        console.log("Nothing to delete here 🤷🏻‍♀️, but you can add an item but pressing 'n'")
    } else {
        try{
            console.log(`Deleting: '${tasks[toDelete][1]}' from your list...\n`)
            tasks.splice([toDelete],1)   
            setTimeout(function() {
                console.log("✅ Successfully removed! Here is your updated list: \n \n")
                viewItem()
            
            }, 500);
        
        } catch(err) {
            console.log(`🥹 Whoops, that index doesn't correspond with an item in the list-- try one of these!`)
            console.table(tasks)        
        }
    }
}
function quit(){
    //From the Todo Menu pressing q quits the application. Say farewell.
    console.log("Finished already? Great work! See you soon😃")
    rl.close()

    }

    if (path){
        fs.readFile('./myTodos.json', "utf8", (err, path) =>{
            // fetch('./myTodos.json')
            // .then results=> resourceLimits.json())
            // .then(console.log)

            if (err) {
                console.log(err);
             } else {

                if (tasks.length >0){
                    JSON.stringify(tasks)
                }
                // const parseddata = JSON.parse(path, (key, value))
                // console.log(parseddata.completed, parseddata.title);
        
                JSON.parse(path, (key, value) => {
                    //console.log(key,":",value)
                    for (key in value){
                        console.log(value.title)
                        console.log(value.title)
                            //console.log(key)
                           // console.log(value[1])
                           // console.log(key[1])
                        if (value[0] == false){
                            //tasks.push("[ ]",value[0])
                            //console.log("[ ]",value[0])
                        } else if (value[0] == true){
                            //tasks.push(["[✓]",item[0]])
                            //console.log("[✓]",title[0])
                    } 
                    //console.log(key,":",value); // log the current property name, the last is "".
                    //return value; // return the unchanged property value.
         }
        } 
        )}
    })
}
            
        

welcome()




// stretch: https://nodejs.org/docs/latest-v15.x/api/readline.html#readline_example_read_file_stream_line_by_line