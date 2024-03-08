// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // alert("Clicked Add Row"); // Replace this line with your code.
    // Add a new row
    let table = document.getElementById("grid");
    let newRow = table.insertRow();
    let newCell = newRow.insertCell();
    numRows++;
    numCols++;
    // Add a new cell
    for (let i = 0; i < numCols; i++) {
        newCell = newRow.insertCell();
    }

    // Add event listener to each cell
    for (let i = 0; i < numCols; i++) {
        newCell = newRow.insertCell();
        newCell.addEventListener("click", function() {
            newCell.style.backgroundColor = colorSelected;
        });
    }


}

// Add a column
function addC() {
    // alert("Clicked Add Col"); // Replace this line with your code.
    // Add a new column
    let table = document.getElementById("grid");
    let newCell;
    numCols++;
    // Add a new cell
    for (let i = 0; i < numRows; i++) {
        newCell = table.rows[i].insertCell();
    }

    // Add event listener to each cell
    for (let i = 0; i < numRows; i++) {
        newCell = table.rows[i].insertCell();
        newCell.addEventListener("click", function() {
            newCell.style.backgroundColor = colorSelected;
        });
    }


}

// Remove a row
function removeR() {
    // alert("Clicked Remove Row"); // Replace this line with your code.
    // Remove a row
    let table = document.getElementById("grid");
    table.deleteRow(numRows - 1);
    numRows--;
    numCols--;

}

// Remove a column
function removeC() {
    // alert("Clicked Remove Col"); // Replace this line with your code.
    // Remove a column
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        table.rows[i].deleteCell(numCols - 1);
    }

    numCols--;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}