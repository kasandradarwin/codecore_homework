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
                let startingPoint = this.allpoints[0];
                let finalLocation =this.allpoints[this.allpoints.length-1];
        
                let path = ""
               
                   
                console.log("--BEGIN LOG")
              
            
                ////// this works to create the grid. save this at all costs.
                for (let i = 0; i < this.maxX; i++) {
                for (let j = 0; j < this.maxY; j++) {
                    path += '□'
                }
                path += '\n'
                }

                console.log(path)
                ///////////

                
               // while (this.allpoints.length>1){
                    // console.log("maxY:" , this.maxY, " minY:", this.minY)
                    // console.log("maxX:" , this.maxX, " minX:", this.minX)
                // for (let i = this.maxY-1;  i >= this.minY; i--){
                // //     //console.log("i:",[i])
                //     for (let j = this.minX; j<= this.maxX; j++){
                //         //console.log("j:",[j])
                //         while (this.allpoints.length>1){
                //            // for (let item in this.allpoints){
                //                 //console.log(this.allpoints)
                //             if (this.allpoints[0] === j || this.allpoints[1] === i){
                //                 path += "■"
                //                 this.allpoints.shift()
                //                 console.log("■", this.allpoints)
                //             } else {
                //                 path += "□"
                //                 console.log("i:",[i]," j:",[j])
                //                 this.allpoints.shift()
                //                 console.log("i:",[i]," j:",[j]) 
                //                 //console.log("□", this.allpoints)
                //            } 
                //         } console.log(path) 
                //     }    //console.log(path)            
                //     } console.log(path) 
                    console.log("--END LOG")
               // }
            }
            
 }

     
    // const flash = new Turtle(0, 4)

   
    // flash.forward(3).left().forward(3).forward(4);
    // flash.allPoints()


    //console.log(flash.forward(5).right().forward(5).right().forward(5).right().forward(5).print())
    //console.log(camino)




const flash = new Turtle(0, 0)
    flash.forward(2).right().forward(3).left().forward(3).right().forward(3)
    .print()
    //.allPoints()

  

            
