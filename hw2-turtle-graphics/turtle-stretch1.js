//Codecore Week 2 homework

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
            const slicedpoints = this.allpoints;

            for (let i=0 ; i<this.maxX+2; i++){         //iterates through the widtn of the grid            
                const x = []
                for(let j=0; j<this.maxY+2; j++){  //iterates through the length of the grid
                    const gridPath = slicedpoints.find((item)=>{
                    return item.join(",")===`${j},${i}` 
                    })
                    if(gridPath) x.push("■") // if the box is crossed by the turtle-- fills the box, pushes to x array
                    else x.push("□") // if not, the box will be empty- push to x array
                }
        
                final.push(x.join("")) //pushes x arrays to final array
                }
                //joins and prints the final arrays-- printing them on their own lines to print the grid.
                console.log("--BEGIN LOG")
                console.log(final.join("\n"))
                console.log("--END LOG")
        }  
 }

 function stretch() {
    // taking the arguments, splitting them into an array separated by the dashes
    
    let commands = process.argv.slice(2);
    commands = commands.toString()
    let commandsArr = commands.split("-")


    //this iterate through and convert each shorthand command to a function call, eg.f10 will be .forward(10)
    let turtle = new Turtle(0,0); //setting a default value
    
    console.log(this.maxX, this.maxY)

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
        console.log(turtle.allPoints())
        
        turtle.print()
    }

stretch()

