//Codecore Week 2 homework

//Have your script accept an option --output=[filename<]/code> where [filename] corresponds to the name of
//  a file. If the option is used, write the turtle drawing to the file using fs.writeFile. Notify the user of that the 
//  write was completed.



const fs = require('fs');

class Turtle {
    constructor(x,y){
        this.x = x || 0;
        this.y = y || 0;
        this.allpoints = [];
        this.allpoints.push([x,y])
        this.direction = "east"

        this.maxX = this.x; //these will be used to create the grid later. Values will be updated in the forward() function
        this.maxY = this.y;
    }

         //X axis = West <> East
         //Y axis = North <> South
         forward(steps) {
          
            for(let z = 0; z <steps; z++) {
            //checks to see what the currect direction is, and moved the turtle forward or backward in the right direction
            //iterates through one by one and pushes to allpoints array each time to track every step 
                if (this.direction === "north") {
                    this.y--
                    this.allpoints.push([this.x,this.y])

                } else if (this.direction === "east") {
                    this.x++
                    this.allpoints.push([this.x,this.y])

                } else if (this.direction === "south") {
                    this.y++
                    this.allpoints.push([this.x,this.y])

                } else if (this.direction === "west") {
                    this.x--
                    this.allpoints.push([this.x,this.y])
                }
            }   

            //getting the highest value for the x axis and y axis, will be used to create the grid later

            if(this.x > this.maxX){
                this.maxX = this.x 
            }  else if (this.y > this.maxY){
                this.maxY = this.y
            }

        return this;
        } 

        right() {
        //checks the current direction to turn the turn "right" from the current direction
            if (this.direction === "north") {
                this.direction = "east"

            } else if (this.direction == "east") {
                this.direction = "south"

            } else if (this.direction === "south") {
                this.direction = "west"

            } else if (this.direction === "west") {
                this.direction = "north"
            }
        return this;
        }
    

        left() {
        //checks the current direction, turns the turtle left

            if (this.direction == "north") {
                this.direction = "west"

            } else if (this.direction == "east") {
                this.direction = "north"

            } else if (this.direction == "south") {
                this.direction = "east"

            } else if (this.direction == "west") {
                this.direction = "south"
            }
            return this;
        }

        allPoints(){
        return(this.allpoints)
        } 
        
        print(){
        
            const final = [];
            const slicedpoints = this.allpoints
            
            for (let i=0 ; i<this.maxX+2; i++){         //iterates through the widtn of the grid            
                const x = []
                for(let j=0; j<this.maxY+2; j++){  //iterates through the length of the grid
                    const gridPath = slicedpoints.find((item)=>{
                    return item.join(",")===`${j},${i}` 
                    })
                    if(gridPath) x.push("■") // if the box is crossed by the turtle-- fills the box, pushes to x array
                    else x.push("□") // if not, the box will be empty- push to x array
                }
                
                final.push(x.join(""))
                }
                return final.join("\n")
        }  
 }

 function stretch() {
   // taking the arguments, splitting them into an array separated by the dashes

    let commands = process.argv.slice(3);
    commands = commands.toString()
    let commandsArr = commands.split("-")


    //this iterate through and convert each shorthand command to a function call, eg.f10 will be .forward(10)
    let turtle = new Turtle(0,0); //setting a default value

    for (let i = 0; i < commandsArr.length; i++) {
        if (commandsArr[i][0]== "f"){
            turtle = turtle.forward(commandsArr[i].slice(1))
        } else if (commandsArr[i][0]== "r") {
            turtle = turtle.right()
        } else if (commandsArr[i][0]== "l") {
            turtle = turtle.left()
        } else if (commandsArr[i][0]== "t"){
            turtle = new Turtle(commandsArr[i][1],commandsArr[i][3])
        } else {
            console.log("Whoops, try again. Enter something like 't0,4-f3-l-f3-r-f5-r-f8-r-f5-r-f3-l-f3'")
        } 
    } 
        return turtle;
    }
//this seemed to fit better outside of a function. Just grabbing the input, and separating the filename from the commands.
// if --output is included-- call saveToFile function

let input = process.argv[2];
input = input.toString()
let inputsplit = input.split("=")

if (inputsplit =="--output"){
    saveToFile()
    }

function saveToFile() {

let data = stretch().print();
let filename = inputsplit[1];
console.log(filename)

// changed print statement to return

fs.writeFile("drawing.txt", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(`Drawing written to ${filename}`)
    }
  })

}


//stretch()
saveToFile()


