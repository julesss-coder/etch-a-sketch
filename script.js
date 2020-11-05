let container = document.querySelector('#container');
let cellNum;
const reset = document.querySelector('#reset');
const randomColor = document.querySelector('#randomColor');
const shade = document.querySelector('#shade');

// Event listener
  // for reset button: make regular grid
reset.addEventListener('click', function(e) {
    cellNum = prompt('How many cells per side should the new square have? (max 100)');
    if(cellNum <= 100) {
        container.innerHTML = '';
        makeGrid(cellNum);
    } else {
        cellNum = prompt('Please choose a number <= 100 for your new grid\'s side length');
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
  // for shade button
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

// make default grid
makeGrid(cellNum = 16);

// change color
function changeColor() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
    // add class that changes color upon mouseover
    // color should not be removed - so we can just leave it
        cell.addEventListener('mouseover', function(e) {
            cell.classList.add('changedColor');
        });
    });
}

// change each cell to random color on mouseover
// create random color: 


// use rgb(red, green, blue), each value is between 0 and 255
// create random number between 0 and 255 for each color in the array(?)
// put them together with string literals to form a color and style the cells like so:
// cell.style.backgroundColor = 'rgb(`${red, green, blue}`';