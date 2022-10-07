const readline = require("readline");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const tasks = [];

// creating the interface

const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
    prompt: "\n >" 
    })

// the initial welcome message

function welcome(){
    console.log("Welcome to Todo CLI \n \n  -------------------- \n \n")
    commandList()
    //console.log(commandList())
    //rl.prompt()
}

//the command list, I've written a function to call it, rather than retyping it each time.

function commandList(){
    console.log(" \n (v) View * (n) New * (cX) Complete * (dX) Delete * (s) Save * (q) Quit \n \n")
}


// a switch statement/function to triage the command the user type, and call the appropriate function

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
        case 's':
            console.log("\n \n 👉 Save List 👈\n \n ")
            saveToDo()
            break;
        default:
            console.log("Hmm... that didn't work. Did ya wanna try that again? \n \n(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
            //r1.prompt()
    }
});

    //displays the list in a nice, easy to read format. 
    // Delays a quarter of a sec from the command being received 
function viewItem(){
    if (tasks.length > 0){
        setTimeout(function() {
        console.log("📝 To Do List\n")
        for (let i = 0; i < tasks.length; i++) {
            console.log(i, tasks[i].join(" "))  
        }
        commandList()
        }, 250)
        } else {
        console.log("Your To Do list is empty, you can add an item but pressing 'n'")
    }
}

// adds a new item to the list, pushing it to the array that is processed in viewItem()

function newItem(){
    rl.question("What new item would you like to add to the list? \n", (newitem) => {

        tasks.push(["[ ]",newitem])

        setTimeout(function() {
            console.log(`\n \n ✅${newitem} has been added to your to-do list\n \n`)
        commandList()
        }   , 500);
        })  
    }

// marks an item on the list as complete by the index. Error logging for
// if list is empty, and for if the index is out of range or can't be interpreted.
// each provides a helpful suggestion
   
function completeItems(checkOff){
    if (tasks.length == 0){
        console.log("Whoops! Your To Do list is empty, you can add an item but pressing 'n'")
    } else {
        try{
            console.log(`Marking: '${tasks[checkOff][1]}' complete...\n`)
            tasks[checkOff][0] = "[✓]"

            //setting the timeout just because I think it looks nice 

            setTimeout(function() {
                console.log("✅ Success! Here is your updated list: \n \n")
                viewItem()
            }, 500);
        } catch(err) {
            console.log(`🥹 Whoops, that index doesn't correspond with an item in the list-- try one of these!`)
            console.table(tasks)
        }   
    }

}
// same as completeItems(), minus the obvious
// deletes an item from the list by the index. Error logging for
// if list is empty, and for if the index is out of range or can't be interpreted.
// each provides a helpful suggestion

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

// closes the interface, and says bye
function quit(){
    //From the Todo Menu pressing q quits the application. Say farewell.
    console.log("\n \n Finished already? Great work! See you soon😃")
    rl.close()

    }
   
// You can save your to do list to a file    
function saveToDo() {
    rl.question("What would you like to name your file? Press enter to use 'toDoList.json' \n", (userfilename) => {
        let jsonobj = [];

        filename = userfilename || 'toDoList.json';

        for (let item of tasks) {
            if (item.includes('[✓]')){
                jsonobj.push({"completed": true, "title": (item.slice(1)).join(" ")})
            } else {
                jsonobj.push({"completed": false, "title": (item.slice(1)).join(" ")})
            }
            
        }

    const jsonString = JSON.stringify(jsonobj)
     
        fs.writeFile(filename, jsonString, err =>{
            if (err) {
                console.log(err);
            } else {
                console.log("List saved to ", filename)
            }
        })

        setTimeout(function() {
            console.log(`\n \n ✅${filename} has been successfully saved\n \n`)
        commandList()
        }   , 500);
        })  

}

// reads a file passed in as an argument, parses the info 
// and adds it to the list seamlessly LIKE NOTHING HAPPENED

if (process.argv[2]) {
    fs.readFile(process.argv[2], {encoding: 'utf-8'}, (err, data) => {
      if (err) throw err;
      for (let i = 0; i < JSON.parse(data).length; i++) {
        parsed = (JSON.parse(data)[i])
            if (parsed.completed=== false){
                tasks.push(["[ ]",parsed.title])
            } else if (parsed.completed===true){
                tasks.push(["[✓]",parsed.title])
            }
        } 
    })
  }
            
        

welcome()


