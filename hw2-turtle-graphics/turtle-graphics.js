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

         forward = function(steps) {
            console.log(steps)
            console.log(direction)
            if(this.direction == "north") {
                this.y = this.y-steps
            } else if (direction == "east") {
                this.x = this.x + steps
            } else if (direction == "south") {
                this.y = this.y + steps
            } else if (direction == "west") {
                this.x = this.x - steps
            }
            camino.push([this.x, this.y])   
            } 
            //right : function() {}
     }
 
    
    let flash = new Turtle(0, 0)
   flash.forward(5)



    //console.log(flash.forward(5).right().forward(5).right().forward(5).right().forward(5).print())
    //console.log(camino)


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

        this.allPoints = function (){
            console.log(this.camino)
        }

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