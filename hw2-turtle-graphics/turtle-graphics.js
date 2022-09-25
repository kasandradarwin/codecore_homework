//Codecore Week 2 homework


// To begin drawing, your program needs to know where it should begin. 
//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 
const camino = [];
let direction;

class Turtle {
    constructor(x,y){
        this.x = x || 0;
        this.y = y || 0;
        camino.push([this.x, this.y])
        this.direction = "east"
    }

        //Create a forward method that takes a # of steps then updates the Turtle instance with its new position after moving that many steps.
         //Keep track of every movement the turtle makes including the first one.

         //X axis = West <> East
         //Y axis = North <> South

        currentdirection() {
            return this.direction;
         }

    

         forward(steps) {
            this.direction = this.currentdirection();
            //console.log(steps)
            //console.log(direction)
            if(this.direction === "north") {
                this.y === this.y-steps
            } else if (this.direction === "east") {
                this.x === this.x + steps
            } else if (this.direction === "south") {
                this.y === this.y + steps
            } else if (this.direction === "west") {
                this.x === this.x - steps
            }
            camino.push([this.x, this.y])   
            } 
        //Create a right method that takes zero arguments.
        // When right is called, update the Turtle instance to rotate its facing to the right. 
        // A turtle should begin facing east.

            right() {
                this.direction = this.currentdirection();
                console.log(this.direction)

                if (this.direction === "north") {
                    this.direction = "east"

                } else if (this.direction == "east") {
                    this.direction = "south"

                } else if (this.direction === "south") {
                    this.direction = "west"

                } else if (this.direction === "west") {
                    this.direction = "north"
                }
                camino.push([this.x, this.y])   
            console.log("right function, direction changed to: ",this.direction)
            

            }
     }
 
    
    let flash = new Turtle(0, 0)
   
  



    //console.log(flash.forward(5).right().forward(5).right().forward(5).right().forward(5).print())
    console.log(camino)


        //Create a right method that takes zero arguments.
        // When right is called, update the Turtle instance to rotate its facing to the right. 
        // A turtle should begin facing east.
        // this.right = function () {
        //     this.direction = east;
        //     camino.push()
        // }

        // Create a left method like right but turns the turtle's facing to the left.
        // this.left = function () {
        //     this.direction = west;
        //     camino.push()
//         // }

    

        // print(){
        //     console.log("--BEGIN LOG")

        //     console.log("--END LOG")
        // }
    
//     }
// }


// const flash = new Turtle(0, 0)
//     flash.forward(5)
//     .right()
//     .forward(5)
//     .right()
//     .forward(5)
//     .right()
//     .forward(5)
//     .print()