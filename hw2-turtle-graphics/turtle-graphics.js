
// To begin drawing, your program needs to know where it should begin. 
//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 

class Turtle{
    constructor(x,y){
        this.x = x || 0;
        this.y = y || 0;

        //Create a forward method that takes a number of steps 
        //then updates the Turtle instance with its new position after moving that many steps.
         //Keep track of every movement the turtle makes including the first one.
        this.forward = function (steps) {
            this.steps = steps;
            this.x += steps;
            this.y += steps
        }
        //Create a right method that takes zero arguments.
        // When right is called, update the Turtle instance to rotate its facing to the right. 
        // A turtle should begin facing east.
        this.right = function () {
            this.direction = east;
        }

        // Create a left method like right but turns the turtle's facing to the left.
        this.right = function () {
            this.direction = west;
        }

        this.allPoints()
    
    }

   
    allPoints()
    print()
}


new Turtle(0, 0)
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print()