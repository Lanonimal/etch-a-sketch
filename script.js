let gridCntnr = document.querySelector("#gridContainer")
let square = document.querySelector("#square");


for (let i = 0; i < 32; i++) {
    const gridElement = document.createElement("div");
    gridElement.setAttribute("id", "square");
    gridElement.addEventListener('mouseover', changeColor)
    gridCntnr.appendChild(gridElement);
    }

function changeColor(e) {
    e.target.style.backgroundColor = 'black'
}

