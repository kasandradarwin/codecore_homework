// In this homework, you will create a script that can take any number of arguments then outputs them inside boxes.

function drawLine(num1){
    console.log("━".repeat(num1))
}

//drawLine(12)

//need to add condition for if num is 0 or 1
function drawTopBorder(num1){
    if (num1 < 1){
        console.log("┏" + "┓")
    } else if ( num1 == 1){
        console.log("┏" + "━"+ "┓")
    } else {
    console.log("┏" + "━".repeat(num1) + "┓")
}
}
// drawTopBorder(0)
// drawTopBorder(1)
// drawTopBorder(4)

function drawMiddleBorder(num1) {
    if (num1 < 1){
        console.log("┣" + "┫")
    } else if ( num1 == 1){
        console.log("┣" + "━"+ "┫")
    } else {
    console.log("┣" + "━".repeat(num1) + "┫")
    }
}

// drawMiddleBorder(0)
// drawMiddleBorder(1)
// drawMiddleBorder(8)

function drawBottomBorder(num1) {
    if (num1 < 1){
        console.log("┗" + "┛")
    } else if ( num1 == 1){
        console.log("┗" + "━"+ "┛")
    } else {
    console.log("┗" + "━".repeat(num1) + "┛")
    }
}
// drawBottomBorder(0)
// drawBottomBorder(1)
// drawBottomBorder(8)