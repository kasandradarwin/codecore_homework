// In this homework, you will create a script that can take any number of arguments then outputs them inside boxes.

function drawLine(num1){
    return("━".repeat(num1))
}


function drawTopBorder(num1){
    if (num1 < 1){
        console.log("┏" + "┓")
    } else if ( num1 == 1){
        console.log("┏" + "━"+ "┓")
    } else {
    return("┏" + "━".repeat(num1) + "┓")
}
}

function drawMiddleBorder(num1) {
    if (num1 < 1){
        console.log("┣" + "┫")
    } else if ( num1 == 1){
        console.log("┣" + "━"+ "┫")
    } else {
    return("┣" + "━".repeat(num1) + "┫")
    }
}

function drawBottomBorder(num1) {
    if (num1 < 1){
        console.log("┗" + "┛")
    } else if ( num1 == 1){
        console.log("┗" + "━"+ "┛")
    } else {
    return("┗" + "━".repeat(num1) + "┛")
    }
}

// function drawBarsAround(theString) {
//     if (theString.length < 1){
//         console.log("┃" + "┃")
//     } else if ( theString.length == 1){
//         console.log("┃" + theString+ "┃")
//     } else {
//     return("┃" + theString + "┃")
//     }
// }

function drawBarsAround(theString, longestLength) {
    let extraBoxSize =parseInt(longestLength-theString.length)
    let padding = " ".repeat(extraBoxSize)
    //console.log("padding: " + padding + "<--padding ends") 
    //console.log("x box size: " + extraBoxSize) 
     
    console.log("┃" + theString + padding + "┃")
    }


//drawBarsAround("abc", 100)

function boxIt(arr){  
//let insideOfBox;
    for (let i = 0; i < arr.length; i++) {
    let longestLength = arr[1].length;
    //console.log("longestLength: "+ longestLength)
        if (arr[i].length > longestLength){
           const longestLength = arr[i].length;
           //console.log("changed to: "+ longestLength)
        }  else {
           const longestLength = arr[i].length;
           //console.log("changed to: "+ longestLength)
        }
    console.log(`${drawTopBorder(longestLength)}`)
    for (let j = 0; j < arr.length; j++) {
        drawBarsAround(arr[i], longestLength)
        console.log(drawMiddleBorder(longestLength))
    }
    
    // const insideOfBox = ((drawBarsAround(arr[i], longestLength)) )
    
    // console.log(`${insideOfBox.repeat(2)}`)
    console.log(`${drawBottomBorder(longestLength)}`)
 }   
}


boxIt(["Jon Snow","Cersei Lannister"])
