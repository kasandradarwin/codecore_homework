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
        this.camino.push([this.x, this.y])
        this.allpoints.push([x,y])
        this.direction = "east"
    }

        //Create a forward method that takes a # of steps then updates the Turtle instance with its new position after moving that many steps.
         //Keep track of every movement the turtle makes including the first one.

         //X axis = West <> East
         //Y axis = North <> South

        // currentdirection() {
        //     return this.direction;
        //  }


         forward(steps) {
            //this.direction = this.currentdirection();
            for(let z = 0; z <=steps; z++) {

                if (this.direction === "north") {
                    this.y--
                    this.allpoints.push([this.x,this.y])
                   // console.log(" north y--")

                } else if (this.direction === "east") {
                    this.x++
                    this.allpoints.push([this.x,this.y])
                    //console.log(" east x++")
                    //console.log(this.x,this.y)

                } else if (this.direction === "south") {
                    this.y++
                    this.allpoints.push([this.x,this.y])
                    //console.log(" south y++")

                } else if (this.direction === "west") {
                    this.x--
                    this.allpoints.push([this.x,this.y])
                    //console.log(" west x--")
                }
        }
            this.camino.push([this.x, this.y])   
            //console.log(this.allpoints)

            return this;
            } 
        //Create a right method that takes zero arguments.
        // When right is called, update the Turtle instance to rotate its facing to the right. 
        // A turtle should begin facing east.

            right() {
                //this.direction = this.currentdirection();
            
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
                //this.direction = this.currentdirection();

                if (this.direction === "north") {
                    this.direction = "west"

                } else if (this.direction == "east") {
                    this.direction = "north"

                } else if (this.direction === "south") {
                    this.direction = "east"

                } else if (this.direction === "west") {
                    this.direction = "south"
                }
                return this;
            }

            allPoints(){
             for (let i = 0; i < this.allpoints.length; i++) {
                console.log("allpoints: " + this.allpoints[i][0]);
                //maybe try to build x and y arrays here? this.allpoints[i][0], this.allpoints[i][1]
                 //return this.allpoints;
             }
            }
            
        
            print(){
                //accessing the final items in the array, saving them to a variable to create the grid size
                //this.startingplace = this.allpoints[0];
                let last= this.camino.length-1;
                let lastitem=(this.camino[last])
                this.maxwidth = lastitem[0]
                this.maxheight = lastitem[1]
                this.xplot =[];
                this.yplot =[];

                // might not end up needing this, but just building an empty array with the max width
                this.sizerequired = Array(this.maxwidth);

                for (let i = 0; i < this.camino.length; i++) {
                    this.xplot.push(this.camino[i][0])
                    this.yplot.push(this.camino[i][1])
                }   
                    //console.log("to plot x: " + this.xplot)
                    //console.log("to plot y: " + this.yplot)
                    // console.log(Math.min(...this.yplot))
                    // console.log(Math.min(...this.xplot))
                    // console.log(Math.max(...this.yplot))
                    // console.log(Math.max(...this.xplot))
            
                //console.log(sizerequired)
                //iterating through all points to push empty □ or full boxes ■ to an array
                for (let j = 0; j < this.allpoints.length; j++) {
                    const element = this.allpoints[j];
                    //let remainder = this.maxwidth - element[0]

                    this.xplot = [[Array(element[0]).fill("■")]]
                        for (let k = element[0]; k < this.sizerequired.length; k++) {
                            this.xplot.push("□")
                            
                        }
                    
                    
                    }
  
                console.log("--BEGIN LOG")
                console.log(this.xplot)
                console.log("--END LOG")
               

            }

}
     
    
    const flash = new Turtle(0, 4)
    

   
    flash.forward(3).left().forward(3);
    flash.allPoints()



    //console.log(flash.forward(5).right().forward(5).right().forward(5).right().forward(5).print())
    //console.log(camino)




// const flash = new Turtle(0, 0)
//     flash.forward(5)
//     .right()
//     .forward(5)
//     .right()
//     .forward(5)
//     .right()
//     .forward(5)
//     .print()


            
