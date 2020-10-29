const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
 
  
makeGrid();

function makeGrid() {
  makeRows(16);
  makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  for (let i = 0; i < rowNum; i++) {
    let row = document.createElement('div');
    container.appendChild(row).className = 'gridRow';  
  };
};

// Make columns
function makeColumns(cellNum) {
  for (let j = 0; j < rows.length; j++) {
    for (let k = 0; k < cellNum; k++) {
      let newCell = document.createElement('div');
      rows[k].appendChild(newCell).className = 'cell';
    };
  };
};

// Grab individual divs
const divs = Array.from(document.querySelectorAll('.gridRow .cell'));

// change div color on mouseenter
divs.forEach(function(div) {
  div.addEventListener('mouseenter', function(e) {
    div.classList.add("changedColor");
  });
});

// Change div color back to normal on mouseleave
function removeClass(e) {
  div.classList.remove("changedColor");
};

divs.forEach(function(div) {
  div.addEventListener('mouseleave', setTimeout(removeClass, 2000))
});