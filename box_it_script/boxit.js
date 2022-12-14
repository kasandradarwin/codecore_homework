// In this homework, you will create a script that can take any number of arguments then outputs them inside boxes.

//draws a line of the requested length

function drawLine(num1){
    return("━".repeat(num1))
}

// draws the top border, length determines by number passed in
function drawTopBorder(num1){
    if (num1 < 1){
        console.log("┏" + "┓")
    } else if ( num1 == 1){
        console.log("┏" + "━"+ "┓")
    } else {
    return("┏" + "━".repeat(num1) + "┓")
}
}

// draws the middle border, length determines by number passed in
function drawMiddleBorder(num1) {
    if (num1 < 1){
        console.log("┣" + "┫")
    } else if ( num1 == 1){
        console.log("┣" + "━"+ "┫")
    } else {
    return("┣" + "━".repeat(num1) + "┫")
    }
}

// draws the bottom border, length determines by number passed in
function drawBottomBorder(num1) {
    if (num1 < 1){
        console.log("┗" + "┛")
    } else if ( num1 == 1){
        console.log("┗" + "━"+ "┛")
    } else {
    return("┗" + "━".repeat(num1) + "┛")
    }
}

//draws bars around the string passed in
//since the boxIt function takes in an array-- this function adds padding to any strings shorter than the longest string
//this way all the boxes are the same size
function drawBarsAround(theString, longestLength) {
    if (longestLength > theString.length){
        let extraBoxSize = parseInt(longestLength-theString.length)
        let padding = " ".repeat(extraBoxSize)
        console.log("┃" + theString + padding + "┃")
    } else {
        console.log("┃" + theString + "┃")
    }
}
//boxes the strings passed in using the above functions

function boxIt(arr){  
    // grabs the length of the longest string to determine the box size
   const longestLength = Math.max(...(arr.map(columnWidth => columnWidth.length)));
        
     console.log(`${drawTopBorder(longestLength)}`)

    // to fill the inside of the box, and make sure the middle bar isn't repeated at the very end
        for (let j = 0; j < arr.length; j++) {
            drawBarsAround(arr[j], longestLength)
            if (j == arr.length-1){
                break;
            } else {
            console.log(drawMiddleBorder(longestLength))
        }
        }

    console.log(`${drawBottomBorder(longestLength)}`)
     }   


boxIt(["Jon Snow","Cersei Lannister","Kasandra Darwin","Bill Tucker", "hello", "myfriends"])
