//Codecore Week 2 homework


// To begin drawing, your program needs to know where it should begin. 
//Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. 
const camino = [];
let width; // in the grid size function -- will set the max width/x
let height; // will set the max height/y axis of the grid

class Turtle {
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;
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
            this.y = parseInt(this.y)
            this.x = parseInt(this.x)
            steps = parseInt(steps)
            //console.log(steps)
            //console.log("forward direction: " + this.direction)
            if(this.direction === "north") {
                this.y = this.y-steps
            } else if (this.direction === "east") {
                this.x = (this.x) + steps
               console.log("thisx + steps = " + this.x + steps)
            } else if (this.direction === "south") {
                this.y = this.y + steps
            } else if (this.direction === "west") {
                this.x = this.x - steps
            }
            camino.push([this.x, this.y])   
            //console.log("forward pushed: " + this.x + " and " + this.y)
            } 
        //Create a right method that takes zero arguments.
        // When right is called, update the Turtle instance to rotate its facing to the right. 
        // A turtle should begin facing east.

            right() {
                this.direction = this.currentdirection();
                

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
            //console.log("right function, direction changed to: ",this.direction)
            //console.log("from right, pushed", this.x + " and " + this.y)
            }

            // Create a left method like right but turns the turtle's facing to the left.

            left() {
                this.direction = this.currentdirection();
                //console.log(this.direction)

                if (this.direction === "north") {
                    this.direction = "west"

                } else if (this.direction == "east") {
                    this.direction = "north"

                } else if (this.direction === "south") {
                    this.direction = "east"

                } else if (this.direction === "west") {
                    this.direction = "south"
                }
                camino.push([this.x, this.y]) 
                //console.log("from left, pushed", this.x + " and " + this.y)
                //console.log("left function, direction changed to: ",this.direction)
            }

            allPoints(){
                console.log("from all points: " ,camino)
                return(camino)
            }
            
            gridsize(){
                for (let i=0; i<= camino.length; i++){
                    console.log(`this.width( ${this.width}) + i[0] (${i[0]})`)
                   this.width = this.width + i[0];
                   console.log(`this.height( ${this.height}) + i[1] (${i[1]})`)
                    this.height = this.height + i[1]
                }
                console.log("gridsize return: " + this.width + this.height)
            }

            //might need recursion here?
            print(){
                this.gridsize = parseInt(this.gridsize())
                console.log(this.gridsize)
                let creategrid = Array(this.gridsize).fill("⏺");
                let fillgrid =[]

                console.log("--BEGIN LOG")
                //console.log(camino.length)
                
                for (let i=0; i<camino.length; i++){
                    //console.log("i is: " + [i])
                    //if (i != )
                    //console.log("⏺")
                    fillgrid.push(creategrid)
                }
                console.log(fillgrid)
                

                 // function fillGrid(print("⏺")){
            //     console.log(camino.join("\n"))
            // }
        
            

                console.log("--END LOG")

            }

        
     }
    
    let flash = new Turtle(0, 0)

    flash.forward(8)
     flash.forward(3)

     flash.forward(6)


    flash.right()
    flash.forward(3)
    flash.left()
     flash.print()
     //flash.allPoints()


   
  



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



