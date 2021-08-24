const defaultSize = 16;
let currentSize = defaultSize;
const defaultMode = 'color';
let currentMode = defaultMode;
let gridCntnr = document.querySelector("#gridContainer")
let square = document.querySelector("#square");
const clearBtn = document.querySelector("#clearButton");
const eraserBtn = document.querySelector("#eraseButton");
const colorBtn = document.querySelector("#colorButton");
const rainbowBtn = document.querySelector("#rainbowButton");

clearBtn.onclick = () => reloadGrid();
eraserBtn.onclick = () => setCurrentMode('eraser') 
colorBtn.onclick = () => setCurrentMode('color') 
rainbowBtn.onclick = () => setCurrentMode('rainbow') 

for (let i = 0; i < defaultSize * defaultSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.setAttribute("id", "square");
    gridElement.addEventListener('mouseover', changeColor)
    gridCntnr.appendChild(gridElement);
    gridCntnr.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`
    gridCntnr.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`
    }


function changeColor(e) {
    e.target.style.backgroundColor = '#333333'
    if (currentMode == 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    }
    else if (currentMode == 'color') {
        e.target.style.backgroundColor = '#333'
    }
    else if (currentMode == 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        /*rainbow color generator is not my code unfortunately, im not that good yet*/
    }
}

function clearGrid() {
    gridCntnr.innerHTML = ''
}

function createNewGrid() {
    let size = prompt("How many squares per side?", '')
    if (size == '' || size < 0) {let validSize = prompt("Please enter a positive number")
    for (let i = 0; i < validSize * validSize; i++) {
        const gridElement = document.createElement("div");
        gridElement.setAttribute("id", "square");
        gridElement.addEventListener('mouseover', changeColor)
        gridCntnr.appendChild(gridElement);
        gridCntnr.style.gridTemplateColumns = `repeat(${validSize}, 1fr)`
        gridCntnr.style.gridTemplateRows = `repeat(${validSize}, 1fr)`
        }}
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.setAttribute("id", "square");
        gridElement.addEventListener('mouseover', changeColor)
        gridCntnr.appendChild(gridElement);
        gridCntnr.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        gridCntnr.style.gridTemplateRows = `repeat(${size}, 1fr)`
        }
}

function reloadGrid() {
    clearGrid();
    createNewGrid();
}


function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
}



function activateButton(newMode) {
    if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active')
    }
    else if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active')
    }
    else if (currentMode === 'color') {
        colorBtn.classList.remove('active')
    }

    if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    }
    else if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
    }
    else if (newMode === 'color') {
        colorBtn.classList.add('active')
    }
}


