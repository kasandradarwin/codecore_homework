//Codecore Week 2 homework


// To begin drawing, your program needs to know where it should begin. 
//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 

//let width; // in the grid size function -- will set the max width/x
//let height; // will set the max height/y axis of the grid

class Turtle {
    constructor(x,y){
        this.x = x || 0;
        this.y = y || 0;
        this.camino = [];
        this.allpoints = [];
        this.camino.push([x,y])
        this.allpoints.push([x,y])
        this.direction = "east"
        this.maxX = x;
        this.maxY = y;
      
    }

        //Create a forward method that takes a # of steps then updates the Turtle instance with its new position after moving that many steps.
         //Keep track of every movement the turtle makes including the first one.

         //X axis = West <> East
         //Y axis = North <> South

         forward(steps) {
            for(let z = 0; z <=steps; z++) {
            //checks to see what the currect direction is, and moved the turtle forward or backward in the right direction
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
            this.camino.push([this.x, this.y]) 
            if(this.x > this.maxX){
                this.maxX = this.x
            }  else if (this.y > this.maxY){
                this.maxY = this.y
            }

            return this;
            } 
        //Create a right method that takes zero arguments.
        // When right is called, update the Turtle instance to rotate its facing to the right. 
        // A turtle should begin facing east.

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
        

            // Create a left method like right but turns the turtle's facing to the left.

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
            let output = "Maax X: " + this.maxX + "Max Y: " + this.maxY + "\n"

            for (let i = 0; i < this.allpoints.length; i++) {
                output += "Position " + (i+1) + ": " + this.camino[i] + ", "
                output += "\n"
                //console.log("allpoints: " + this.allpoints[i][0]);
                //maybe try to build x and y arrays here? this.allpoints[i][0], this.allpoints[i][1]
                 //return this.allpoints;
                 return output;
                 }
            }
            
        
            print(){
                //accessing the final items in the array, saving them to a variable to create the grid size
                
                // this.startingplace = this.allpoints[0];
                // let last= this.camino.length-1;
                // let lastitem=(this.camino[last])
                // this.maxwidth = lastitem[0]
                // this.maxheight = lastitem[1]
                // this.xplot =[];
                // this.yplot =[];

                let grid =  Array(this.maxY).fill(null).map(() => Array(this.maxX).fill('X'))
                let output = " "
                
                console.log("--BEGIN LOG")
                for (let row=0; row < this.allpoints.length; row++){
                    console.log("  this.camino[row][cell] X: " + this.camino[row[0]] + " Y: " + this.camino[row][1])
                    let gridX = this.allPoints[row][0]
                    let gridY= this.allPoints[row][1]
                    console.log("gridX: " + gridX + " gridY" + gridY)
                    //console.log("grid: " + grid[gridY][gridX])

                }
                console.table(grid)
                console.log("--END LOG")

                // might not end up needing this, but just building an empty array with the max width
                this.sizerequired = Array(this.maxwidth);

                // for (let i = 0; i < this.camino.length; i++) {
                //     this.xplot.push(this.camino[i][0])
                //     this.yplot.push(this.camino[i][1])
                // }   
                //     //console.log("to plot x: " + this.xplot)
                //     //console.log("to plot y: " + this.yplot)
                //     // console.log(Math.min(...this.yplot))
                //     // console.log(Math.min(...this.xplot))
                //     // console.log(Math.max(...this.yplot))
                //     // console.log(Math.max(...this.xplot))
            
                // //console.log(sizerequired)
                // //iterating through all points to push empty □ or full boxes ■ to an array
                // for (let j = 0; j < this.allpoints.length; j++) {
                //     const element = this.allpoints[j];
                //     //let remainder = this.maxwidth - element[0]

                //     this.xplot = [[Array(element[0]).fill("■""□")]]
                //         for (let k = element[0]; k < this.sizerequired.length; k++) {
                //             this.xplot.push("□")
                            
                //         }                    
                // }  
            }
}
     
    // const flash = new Turtle(0, 4)

   
    // flash.forward(3).left().forward(3).forward(4);
    // flash.allPoints()


    //console.log(flash.forward(5).right().forward(5).right().forward(5).right().forward(5).print())
    //console.log(camino)




const flash = new Turtle(0, 0)
    flash.forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print()


            
