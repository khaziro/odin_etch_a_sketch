const container = document.querySelector(".sketch_container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let gridsAndCols = 0; gridsAndCols < rows * cols; gridsAndCols++) {
    let cell = document.createElement("div");
    cell.innerText = gridsAndCols + 1;
    container.appendChild(cell).className = "grid_item";
  }
}

makeRows(16, 16);
