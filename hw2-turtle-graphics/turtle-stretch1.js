//Codecore Week 2 homework

class Turtle {
    constructor(x,y){
        this.x = x || 0;
        this.y = y || 0;
        this.allpoints = [];
        this.allpoints.push([x,y])
        this.direction = "east"

        //setting the initial values, will be changed and use to set the grid size later.
        this.maxX = x;
        this.maxY = y;
 
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

            //getting the lowest value for the x axis and y axis, will be used to create the grid later

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
                //let startingPoint = this.allpoints[0];
                //let finalLocation =this.allpoints[this.allpoints.length-1];
                
                    const final = [];
                    const slicedpoints = this.allpoints
                    
                    for (let i=0 ; i<this.maxX+2; i++){
                        const x = []
                        for(let j=0; j<this.maxY+2; j++){
                          const gridPath = slicedpoints.find((item)=>{
                            return item.join(",")===`${j},${i}` 
                          })
                          if(gridPath) x.push("■")
                          else x.push("□")
                        }
                      
                        final.push(x.join(""))
                      }
                      
                      console.log(final.join("\n"))
                    console.log("--END LOG")
            }

    
       

            
 }

 function stretch() {
    // taking the arguments, splitting them into an array separated by the dashes

    let commands = process.argv.slice(2);

    commands = commands.toString()
    let commandsArr = commands.split("-")
    let createnewturtle = ""

    for (let i = 0; i < commandsArr.length; i++) {
            if (commandsArr[i][0]== "f"){
                createnewturtle += ".forward(" + commandsArr[i][1] +")"
            } else if (commandsArr[i][0]== "r") {
                createnewturtle += ".right()"
            } else if (commandsArr[i][0]== "l") {
                createnewturtle += ".left()"
            } else if (commandsArr[i][0]== "t"){
                createnewturtle += "new Turtle(" + commandsArr[i][1] + "," + commandsArr[i][3] + ")"
            } else {
                console.log("Whoops, try again. Enter something like 't5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5'")
            }

        }
        createnewturtle += ".print()"
        return createnewturtle  
    }

 stretch(process.argv[2])


 //t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5

//  pseudocode.. // note, maybe change the order below to the order of frequency.. so F would be first, T would be last, and then right and left doesn't matter
//  1. take the argument in as an Array. Split by -
//  Or as an Object.. if key = f, forward(value)

//  for item in array
//  if array[0]== T, create new turtle (might need to remove the comma or use index of?)
// else if array[0] ==f{
//     forward(array[1]) // though this won't capture a 2 digit number like 10

//  }


// either try running the function from the if statement.. but if that breaks things, maybe try concetenating to a string and then running it all at the end