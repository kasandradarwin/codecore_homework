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

function drawBarsAround(theString) {
    if (theString.length < 1){
        console.log("┃" + "┃")
    } else if ( theString.length == 1){
        console.log("┃" + theString+ "┃")
    } else {
    console.log("┃" + theString + "┃")
    }
}

// drawBarsAround("abc")
// drawBarsAround("     hello world")
// drawBarsAround("tres noches han pasado y yo lo mismo      ")

function boxIt(arr){
    let newArray =[]
    let mainArray =[]
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let size = arr[i].length;
        
        mainArray.push(newArray = Array(arr.length).fill(drawTopBorder(size)))
        mainArray.push(newArray = Array(arr.length).fill(drawBarsAround(element) + drawMiddleBorder(size)))
        //mainArray.push(newArray = Array(arr.length).fill(drawMiddleBorder(size)))
        //mainArray.push(newArray = Array(arr.length).fill(drawBarsAround(element)))
        mainArray.push(newArray = Array(arr.length).fill(drawBottomBorder(size)))
   
    }
    //console.log(newArray)
    }
    function rectangleToString(){
       // console.log(newArray.join("/n"))
    }
    //rectangleToString(fillRectangle(5, 3, "🔥"))




boxIt(["Jon Snow","Cersei Lannister"])


// function fillRectangle(arr){

//     
    
//     for (let i = 0; i < height; i++) {
        
//         newArray.push(myArray)
//     }
//     console.log(newArray)
//     }
//     function rectangleToString(){
//         console.log(newArray.join("/n"))
//     }
//     rectangleToString(fillRectangle(5, 3, "🔥"))