//Codecore Week 2 homework

// note to self: can likely remove all the camino stuff.

class Turtle {
    constructor(x,y){
        this.x = x || 0;
        this.y = y || 0;
       // this.camino = [];
        this.allpoints = [];
       // this.camino.push([x,y])
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
           // this.camino.push([this.x, this.y])  

            //getting the highest value for the x axis and y axis, will be used to create the grid later

            if(this.x > this.maxX){
                this.maxX = this.x
                console.log("changing maxX to: ", this.x, " maxX:", this.maxX)
            }  else if (this.y > this.maxY){
                this.maxY = this.y
                console.log("changing maxY to: ", this.y, " maxY:", this.maxY)
            }

            //getting the lowest value for the x axis and y axis, will be used to create the grid later

            // if(this.x < this.minX){
            //     this.minX = this.x
            // }  else if (this.y < this.minY){
            //     this.minY = this.y
            // }

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
            console.log(this.allpoints)
            return(this.allpoints)
        } 
        
            print(){
                let startingPoint = this.allpoints[0];
                let finalLocation =this.allpoints[this.allpoints.length-1];
                console.log(this.maxX)
                console.log(this.maxY)
        
                this.path = []
               
                   
                // console.log("--BEGIN LOG")
                // console.log("thisMaxX", this.maxX, "thisMaxY", this.maxY)
                // for (let i = 0; i < this.maxX; i++) {
                // for (let j = 0; j < this.maxY; j++) {
                //     this.path.push('□')
                // }
                // //path += '\n'
                // }

    

                //iterate twice, first time eg. [2, 4]-- save it to an array, and array of objects where x:2, y:4. At this point, not printed-- just saving the coords
                // once finsihed with that loop, try a new for loop, when its iterating, 
                //check if the coords of x and y exist in the array, if so print, full box, if not print hthe
                //pseudocode for below loop eg. (2, 4), 2,3
                    //1. look for the x axis first, might need to check separately for 0
                    //2. if x is found, check for 0
                    //3.
                    //4.

                    //create a for loop that starts at max x and max y 
                    //as iterating two forloops, one for starting coordinate, ones for y
                    //
                    
                    const final = [];
                    const slicedpoints = this.allpoints
                  
                    console.log(slicedpoints)
                    
                    for (let i=0 ; i<10; i++){
                        const x = []
                        for(let j=0; j<10; j++){
                          const test = slicedpoints.find((item)=>{
                            // console.log(item.join(","), `${i},${j}`)
                            return item.join(",")===`${j},${i}` 
                          })
                          // console.log(test)
                          if(test) x.push("■")
                          else x.push("□")
                        }
                      
                        final.push(x.join(","))
                      }
                      
                      console.log(final)
                    //console.log(final)
                   
                //console.log(this.path)
            
            
                ////// this works to create the grid. save this at all costs.
                // for (let i = 0; i < this.maxX; i++) {
                // for (let j = 0; j < this.maxY; j++) {
                //     path += '□'
                // }
                // path += '\n'
                // }

                // console.log(path)
                ///////////

                /// maybe try index of, with path-- and change to fill box??

                
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




    //const flash = new Turtle(0, 4).forward(3).left().forward(3).print();
    
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

  

            
    // -- BEGIN LOG
// □□□□□□□□□□
// □□□■■■■■■□
// □□□■□□□□■□
// □□□■□□□□■□
// ■■■■□□□□■□
// □□□□□□□□■□
// ■■■■□□□□■□
// □□□■□□□□■□
// □□□■□□□□■□
// □□□■■■■■■□
// -- END LOG

/// 4, 0 
// 3,2
//5,2
// 2,,2