const readline = require("readline")
const tasks = [['[ ]','make breakfast'],['[ ]','make breakfast'],['[ ]','make breakfast'],['[ ]','make breakfast']];



const rl = readline.createInterface({
    input: process.stdin,
    output:  process.stdout,
    prompt: "\n >" 
    })

function welcome(){
    console.log("Welcome to Todo CLI \n \n  -------------------- \n \n  (v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
    //rl.prompt()

}

function commandList(){
    console.log(" \n  (v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")

}


rl.on('line', (command) => {
    switch (command[0]){
        case 'v':
            viewItem() 
            break;
        case 'c':
            console.log(command.slice(1))
            completeItems(command[1]) // might have to turn this into slice later, in case we get to double digits
            break;
        case 'n':
            newItem()
            break;
        case 'd':
            deleteItem(command.slice(1)) // might have to turn this into slice later, in case we get to double digits
            break;
        case 'q':
            quit() 
            break;
        default:
            console.log("Hmm... that didn't work. Did ya wanna try that again? \n \n(v) View * (n) New * (cX) Complete * (dX) Delete * (q) Quit")
            //r1.prompt()
    }
});

    
function viewItem(){
    setTimeout(function() {
    
    console.log("📝 To Do List")
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i].join(" "))  
    }
}, 500);

//rl.prompt()

    //From the Todo Menu, pressing v then Enter should display the contents of the todo
    // list then the Todo Menu again. 
    //When displaying the list, completed items should have a checkmark (i.e. `[✓]`) besides their title.
    }

function newItem(){
    rl.question("What new item would you like to add to the list? \n", (newitem) => {
        //viewItem()

        tasks.push(["[ ]",newitem])
        setTimeout(function() {
            console.log(`✅${newitem} has been added to your to-do list\n \n`)
            viewItem()
            
        }, 500);
       

        })  
    commandList()
    }

//From the Todo Menu pressing n then Enter should ask the user what item to add to the list. 
//The user can then write a response. Save their response as a new item at the end of the todo list.
    

function completeItems(checkOff){
    
    console.log(`Marking: '${tasks[checkOff][1]}' complete...\n`)
    tasks[checkOff][0] = "[✓]"

    //setting the timeout just because I think it looks a bit more polished

    setTimeout(function() {
        console.log("✅ Success! Here is your updated list: \n \n")
        viewItem()
    }, 500);

    setTimeout(function() {
        commandList()
    }, 1200);


  
    //From the Todo Menu pressing cX where X refers to the index of a Todo item then Enter should mark that item as complete. 
    //Tell the user which item was marked. Then, re-display the Todo Menu
    }

function deleteItem(toDelete){

    // /From the Todo Menu pressing dX where X refers to the index of a Todo item then `Enter` 
    //should remove that from the list. Tell the user which item was deleted. Then, re-display the Todo Menu.


    console.log(`Deleting: '${tasks[toDelete][1]}' from your list...\n`)
   
    tasks.splice([toDelete],1)   

    //setting the timeout just because I think it looks a bit nicer

    setTimeout(function() {
        console.log("✅ Successfully removed! Here is your updated list: \n \n")
        viewItem()
    
        commandList()
    }, 500);

}

function quit(){
    //From the Todo Menu pressing q quits the application. Say farewell.
    console.log("Finished already? Great work! See you soon😃")
    rl.close()
    }

welcome()




// stretch: https://nodejs.org/docs/latest-v15.x/api/readline.html#readline_example_read_file_stream_line_by_line