createBoard=()=>{
    let gameboard = document.getElementById("gameboard")
    // let startsBlack = true // row starts with black
    for(let row=1; row<=8; row++){
        // console.log(startsBlack)
        let startsBlack = row%2==1
        console.log(`row ${row} ${startsBlack}`)
        for(let col=1; col<=8; col++){
            let newSquare = document.createElement("div")

            // <- determine color ->
            let color;
            if (startsBlack) {
                color = col%2==0 ? "white" : "black"
            } else {
                color = col%2==0 ? "black" : "white"
            }
            console.log(color)
            // <- end of color determination ->

            newSquare.classList.add("square", `${color}`, `r${row}`, `c${col}`)
            gameboard.appendChild(newSquare)
        }
        // startsBlack = startsBlack ? false : true
    }
}

createBoard()