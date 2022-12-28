createGrid(4)

const newGridBtn = document.querySelector('button')

newGridBtn.addEventListener('click', e=>{

    let side = prompt("Enter number of squares on each side")

    while(side>100 || isNaN(side)){
        alert("Enter number less than 100")
        side = prompt("Enter number of squares on each side")
    }
    let container = document.querySelector('.container')
    container.remove()
    createGrid(parseInt(side))

});



















function createGrid(side) {
    let container = document.createElement("div")
    container.classList.add("container")

    for (let i = 0; i < side; i++) {
        let newRow = document.createElement("div")
        newRow.classList.add("row")

        for (let j = 0; j < side; j++) {
            let newSquare = document.createElement("div")
            newSquare.classList.add("square")
            newRow.appendChild(newSquare)
        }
        container.append(newRow)
    }


    document.body.appendChild(container)

    squares = document.querySelectorAll(".square")

    squares.forEach(square => {

        square.addEventListener("mouseover", e => {
            square.style.backgroundColor = "black";

        });

    });
}