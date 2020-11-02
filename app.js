

// PROBLEM 1:
// Größe des Bereichs, in dem das Grid aufgebaut wird, soll immer gleich sein. Ev. Window-Element verwenden?
// Oder viewport? 
// Wie kann ich die Anpassbarkeit der Divs steuern?
// Was ist der derzeitige Größenbereich, nach dem sich die Griderstellung richtet?
// --> Umsetzung als CSS Flexbox OK
// Kann ich mit Flexbox die Größe des Bereichs festlegen? Die Größe des Flexbox-Containers?


// PROBLEM 2: 
// beim ersten Grid funktioniert die Einfärbung, nachdem ein neuer Wert eingegeben
// wurde, nicht mehr. D.h. in makegrid() muss noch die Funktion, die die Farbe ändert, eingefügt
// werden.
// GELÖST: die verschiedenen Funktionne zum Farbenändern in eine Funktion verpackt und in makeGrid() eingefügt.

// PROBLEM 3: Vielleicht ist die Art, wie ich Reihen und Spalten erzeuge, zu kompliziert?


const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
const clearGrid = document.getElementById('clearGrid');

// Event listeners
clearGrid.addEventListener('click', function(e) {
  container.innerHTML = '';
  let rowNum = prompt('How many squares per side should your sketchpad have?');
  makeGrid(Number(rowNum));
});


makeGrid(rowNum = 16);

function makeGrid(rowNum) {
  makeRows(rowNum);
  makeColumns(rowNum);
  changeColor();
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

/*
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
*/

function changeColor() {
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
}