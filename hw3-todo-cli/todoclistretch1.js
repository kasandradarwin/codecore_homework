const readline = require("readline");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const tasks = [] //[['[ ]','make breakfast'],['[ ]','make breakfast'],['[ ]','make breakfast'],['[ ]','make breakfast']];


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
    console.log(" \n (v) View * (n) New * (cX) Complete * (dX) Delete * (s) Save * (q) Quit \n \n")
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
        case 's':
            console.log("\n \n 👉 Save List 👈\n \n ")
            saveToDo()
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
            //console.log(i, tasks[i])   
        }
        commandList()
        }, 500)
        } else {
        console.log("Your To Do list is empty, you can add an item but pressing 'n'")
    }

    // for (let i = 0; i < tasks.length; i++) {
    //     console.log(tasks[i])
    //     console.log(tasks[i][0])
    //     console.log(tasks[i][1])
        
    // }
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

}


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
     
function saveToDo() {
    filetasks = tasks.toString()
    filename ='toDoList.json'
    rl.question("What would you like to name your file? \n", (filename) => {
        const jsonobj = JSON.stringify(tasks)
        // for (let i = 0; i < tasks.length; i++) {
        //     if (tasks[i][0] == '[ ]'){
        //         jsonobj['completed' + 'false']
        //     } else if(tasks[i][0] == '[✓]'){
        //         jsonobj['completed' + 'true']
        //     }
        //     jsonobj['title' + tasks[i][0] ]
            
        // }

        // if (filename == undefined){
        //     filename = 'toDoList.json'
        // }
        fs.writeFile(filename, filetasks, err =>{
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

            
        

welcome()




// stretch: https://nodejs.org/docs/latest-v15.x/api/readline.html#readline_example_read_file_stream_line_by_line