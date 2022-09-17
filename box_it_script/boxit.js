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
    if (longestLength > theString.length){
        let extraBoxSize = parseInt(longestLength-theString.length)
    
        let padding = " ".repeat(extraBoxSize)
        // console.log("padding: " + padding + "<--padding ends") 
        // console.log("x box size: " + extraBoxSize)  
        console.log("┃" + theString + padding + "┃")
    } else {
        console.log("┃" + theString + "┃")
    }
}



//drawBarsAround("abc", 100)

function boxIt(arr){  
   let longestLength = Math.max(...(arr.map(el => el.length)));
   console.log(longestLength);
// let longestLength;
//    for (let i = 0; i < 1; i++) {
//              //console.log("longestLength: "+ longestLength)
//         if (arr[i].length > longestLength){
//             const longestLength = arr[i].length;
//             console.log("changed to: "+ longestLength)
//         } else {
//             const longestLength = arr[i].length;
//             console.log("changed to: "+ longestLength)     
//         } 
        
     console.log(`${drawTopBorder(longestLength)}`)

    // so the middle bar isn't repeated at the very end
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
//}


boxIt(["Jonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn Snow","Cersei Lannister","hello", "Kasandra"])
