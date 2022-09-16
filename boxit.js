// In this homework, you will create a script that can take any number of arguments then outputs them inside boxes.

function drawLine(num1){
    console.log("━".repeat(num1))
}

//drawLine(12)


function drawTopBorder(num1){
    console.log("┏" + "━".repeat(num1-2) + "┓")
}

drawTopBorder(12)