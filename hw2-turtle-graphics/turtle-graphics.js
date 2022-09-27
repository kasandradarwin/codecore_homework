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
        this.minX = x;
        this.maxY = y;
        this.minY = y;   
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
            this.camino.push([this.x, this.y])  

            //getting the highest value for the x axis and y axis, will be used to create the grid later

            if(this.x > this.maxX){
                this.maxX = this.x
            }  else if (this.y > this.maxY){
                this.maxY = this.y
            }

            //getting the lowest value for the x axis and y axis, will be used to create the grid later

            if(this.x < this.minX){
                this.minX = this.x
            }  else if (this.y < this.minY){
                this.minY = this.y
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
                
                let path = ""
               
                   
                console.log("--BEGIN LOG")
                while (this.allpoints.length>1){
                for (let i = this.maxY-1;  i >= this.minY; i--){
                    //console.log("i:",[i])
                    for (let j = this.minX; j<= this.maxX; j++){
                        //console.log("j:",[j])
                        // while (this.allpoints.length>1){
                           // for (let item in this.allpoints){
                                //console.log(this.allpoints)
                            if (this.allpoints[0] === j && this.allpoints=== i){
                                path += "■"
                                this.allpoints.pop()
                                console.log("■", this.allpoints)
                            } else {
                                path += "□"
                                console.log("i:",[i]," j:",[j])
                                this.allpoints.pop()
                                console.log("i:",[i]," j:",[j])
                                console.log("□", this.allpoints)
                            } //console.log(path)
                          
                        } console.log(path)
                        

                        }//console.log(path)
                        
                
            
                        // if (this.pathTraversed(x,y)){
                        //     console.log(this.x,this.y)
                        //     path += "■"
                        // } else {
                        //     console.log(this.x,this.y)
                        //     path += "□"
                        // }
                        
                        
                    }
                    console.log("--END LOG")
                }
                
                // for (let row=0; row < this.allpoints.length; row++){
                //     //console.log(this.allpoints)
                //     //console.log("  this.camino[row][cell] X: " + this.camino[row[0]] + " Y: " + this.camino[row][1])
                //     //let gridX = this.allPoints[row][0]
                //     //let gridY= this.allPoints[row][1]
                //     //console.log("gridX: " + gridX + " gridY" + gridY)
                //     //console.log("grid: " + grid[gridY][gridX])

                // }
                //console.table("grid: " + grid)
                

                // might not end up needing this, but just building an empty array with the max width
               // this.sizerequired = Array(this.maxwidth);

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

     
    // const flash = new Turtle(0, 4)

   
    // flash.forward(3).left().forward(3).forward(4);
    // flash.allPoints()


    //console.log(flash.forward(5).right().forward(5).right().forward(5).right().forward(5).print())
    //console.log(camino)




const flash = new Turtle(0, 0)
    flash.forward(5).right().forward(1).left().forward(6)
    .print()
    //.allPoints()

  

            
