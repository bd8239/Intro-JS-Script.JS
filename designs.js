// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  var sizeForm  = document.getElementById("sizePicker");
  var cols = sizeForm.inputWidth.value;
  var rows = sizeForm.inputHeight.value;
  var pixelCanvas = document.getElementById("pixelCanvas");
  injectSizedGrid(pixelCanvas, rows, cols);
  event.preventDefault();
}


// removes any existing children theninjects the appropriate 
// amount of rows and columns into the table
function injectSizedGrid(tableNode, rows, cols) {

  // first remove the existing rows and cols
  while (tableNode.firstChild) {
    tableNode.firstChild.remove();
  }
 
  for (row_index = 0; row_index < rows; row_index++) { 
    row = tableNode.insertRow(row_index);
    for (col_index = 0; col_index < cols; col_index++) { 
      cell = row.insertCell(col_index);
      cell.addEventListener(
        'click', 
        colorCell.bind(this, cell)
      );
    }
  }
}

function colorCell(selectedCell) {
  selectedColor = document.getElementById("colorPicker").value;
  selectedCell.style.backgroundColor = selectedColor;
}


document.getElementById("sizePicker").addEventListener("submit", makeGrid, false);
