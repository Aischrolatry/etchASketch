let gridContainer = document.querySelector('.grid-container');
for (i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  gridContainer.appendChild(div);
};


let gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach(function(griditem) {
  griditem.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "blue";
  })
  griditem.addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = "red";
  })
})



let gridReset = document.querySelector('#grid-reset');
gridReset.addEventListener('click', () => {
  gridItem.forEach(function(griditem) {
    gridContainer.removeChild(griditem);
  })
  var gridSize = prompt("How many rows across would you like?");
  if (gridSize !== NaN) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (i = 0; i < gridSize * gridSize; i++) {
      const div = document.createElement('div');
      div.classList.add('grid-item');
      gridContainer.appendChild(div);
    };
  }
  gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach(function(griditem) {
    griditem.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = "blue";
    })
    griditem.addEventListener('mouseout', function(e) {
      e.target.style.backgroundColor = "red";
    })
  })
  
  
});