

let container = document.createElement("div")
container.classList.add("container")

for(let i =0;i<24;i++)
{
    let newRow = document.createElement("div")
    newRow.classList.add("row")

    for(let j =0;j<24;j++)
    {
       let newSquare = document.createElement("div") 
       newSquare.classList.add("square")
       newRow.appendChild(newSquare)
    }
    container.append(newRow)
}

document.body.appendChild(container)

squares = document.querySelectorAll(".square")

squares.forEach(square => {

    square.addEventListener("mouseover",e =>{
        square.style.backgroundColor="black";

    });

});

function createGrid()