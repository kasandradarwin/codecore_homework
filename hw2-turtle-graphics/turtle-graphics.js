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
        this.minX = x;
        this.maxY = y;
        this.minY = y;   
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
                console.log("changing maxX to: ", this.x, " maxX:", this.maxX)
            }  else if (this.y > this.maxY){
                this.maxY = this.y
                console.log("changing maxY to: ", this.y, " maxY:", this.maxY)
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
                console.log(this.maxX)
                console.log(this.maxY)
        
                //this.path = []
                
                    const final = [];
                    const slicedpoints = this.allpoints
                  
                    //console.log(slicedpoints)
                    
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
                    //console.log(final)
                   
                //console.log(this.path)
                    console.log("--END LOG")
            }
            
 }

        
    //const flash = new Turtle(0, 4).forward(3).left().forward(3).print();
    new Turtle(0, 4)
    .forward(3)
    .left()
    .forward(3)
    .right()
    .forward(5)
    .right()
    .forward(8)
    .right()
    .forward(5)
    .right()
    .forward(3)
    .left()
    .forward(3)
    .print();

  
