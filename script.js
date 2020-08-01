let currentPiece;

createBoard=()=>{
    let gameboard = document.getElementById("gameboard")

    for(let row=1; row<=8; row++){
        let startsBlack = row%2==1

        for(let col=1; col<=8; col++){
            let newSquare = document.createElement("div")

            // <- determine color ->
            let color;
            if (startsBlack) {
                color = col%2==0 ? "white" : "black"
            } else {
                color = col%2==0 ? "black" : "white"
            }
            // <- end of color determination ->

            // <- add droppability ->
            newSquare.setAttribute("onDrop", "drop(event)")
            newSquare.setAttribute("onDragover", "allowDrop(event)")

            newSquare.classList.add("square", `${color}`, `r${row}`, `c${col}`)
            gameboard.appendChild(newSquare)
        }
    }
}

allowDrop=(e)=>{
    e.preventDefault()
}

drop=(e)=>{
    e.preventDefault();
    e.target.appendChild(currentPiece)
}

drag=(e)=>{
    console.log("dragging", e.target)
    currentPiece = e.target
}

createPiece=()=>{
    let chessPiece = document.createElement("div")
    chessPiece.classList.add("piece")
    chessPiece.setAttribute("draggable", true)
    chessPiece.setAttribute("ondragstart", "drag(event)")
    let firstSquare = document.querySelector(".r1, .c1")
    firstSquare.appendChild(chessPiece)
}

createBoard()
createPiece()