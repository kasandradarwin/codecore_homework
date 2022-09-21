// copy of boxit.js, going to try to add in the argv stuff

//draws a line of the requested length

function drawLine(num1){
    return("━".repeat(num1))
}

// draws the top border, length determines by number passed in
function drawTopBorder(num1){
    if (num1 < 1 || num1 == undefined){
        console.log("┏" + "┓")
    } else if ( num1 == 1){
        console.log("┏" + "━"+ "┓")
    } else {
    return("┏" + "━".repeat(num1) + "┓")
}
}

// draws the middle border, length determines by number passed in
function drawMiddleBorder(num1) {
    if (num1 < 1 || num1 == undefined){
        return("┣" + "┫")
    } else if ( num1 == 1){
        return("┣" + "━"+ "┫")
    } else {
    return("┣" + "━".repeat(num1) + "┫")
    }
}

// draws the bottom border, length determines by number passed in
function drawBottomBorder(num1) {
    if (num1 < 1 || num1 == undefined){
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
    } else if (theString == undefined) {
        console.log("┃" + "┃")
    } else {
        console.log("┃" + theString + "┃")
    }
}

//boxes the strings passed in using the above functions

function boxIt(arr){  
    // grabs the length of the longest string to determine the box size
   const longestLength = Math.max(...(arr.map(columnWidth => columnWidth.length)));
        
     console.log(`${drawTopBorder(longestLength)}` ${\n}  )

    // to fill the inside of the box, and make sure the middle bar isn't repeated at the very end

    //commenting this for now.. going to try to get it into one line

//     for (let j = 0; j < arr.length; j++) {
//         drawBarsAround(arr[j], longestLength)
//         if (j == arr.length-1){
//             break;
//         } else {
//         console.log(drawMiddleBorder(longestLength))
//     }
//     }

//     console.log(`${drawBottomBorder(longestLength)}`)
// }   

let newArr =[]
let result = 0;

// iterates through the arguments passed in, pushes them to an array, passed that array into the boxit function

for (let i = 2; i < process.argv.length; i++){
    result += process.argv[i];
    newArr.push(process.argv[i])
} 

   boxIt(newArr)


