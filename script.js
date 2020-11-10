let container = document.querySelector('#container');
let cellNum;
const reset = document.querySelector('#reset');
const randomColor = document.querySelector('#randomColor');
const shade = document.querySelector('#shade');

// Event listeners
  // for reset button: make regular grid
reset.addEventListener('click', function(e) {
    cellNum = prompt('Please enter the number of cells per grid side (up to 100).');
    if(cellNum <= 100) {
        container.innerHTML = '';
        makeGrid(cellNum);
    } else {
        cellNum = prompt('Please choose a number up to 100 for your new grid\'s side length');
    }
});
  // for "random color" button (don't create new grid, just change color)
randomColor.addEventListener('click', function(e) {
    debugger;
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function(e) {
           cell.style.backgroundColor = generateRandomColor();
        });
    });
});
  // for shade button (don't create new grid, just change color to shades)
shade.addEventListener('click', function(e) {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
        let originalShade = 200;
        cell.addEventListener('mouseover', function(e) {
            originalShade -= 20;
            cell.style.backgroundColor = `rgb(${originalShade},${originalShade},${originalShade})`;
        });
    });
});

// Functions:
// generate random color
function generateRandomColor() {
    let red = Math.floor(Math.random() * (255 + 1));
    let green = Math.floor(Math.random() * (255 + 1));
    let blue = Math.floor(Math.random() * (255 + 1));
    return `rgb(${red},${green},${blue})`;
}

// Make a grid
function makeGrid(cellNum) {
// display cells als CSS grid
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${cellNum}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cellNum}, 1fr)`;
// Number of cells = userInput ** 2, will be filled into the given grid rows and columns
    for(let i = 0; i < (cellNum**2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    changeColor();
}

// change color upon mouseover
function changeColor() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover', function(e) {
            cell.classList.add('changedColor');
        });
    });
}

// make default grid
makeGrid(cellNum = 16);