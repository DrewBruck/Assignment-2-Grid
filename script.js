// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    
    // Add a new row
    let table = document.getElementById("grid");
    let newRow = table.insertRow();
    numRows++;
    
    //Add a column if this is the very first row (i.e. 1x1)
    if(numCols==0){
        numCols = 1;
    }

    // Add a new cell
    for (let i = 0; i < numCols; i++) {
        let newCell = newRow.insertCell();
        // Add event listener to each cell
        newCell.addEventListener("click", function() {
            newCell.style.backgroundColor = colorSelected;
        });
    }
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    numCols++;

    //Add a row if this is the very first column and there are no rows (i.e. 1x1)
    if(numRows==0){
        addR();
    } else{

        for(let i = 0; i < table.rows.length; i++){
            let newRow = table.rows[i];
            let newCell = newRow.insertCell(0);
            //Add event listener to each cell
            newCell.addEventListener("click", function() {
                newCell.style.backgroundColor = colorSelected;
            });
        }
    }
}

// Remove a row  
function removeR() {
    let table = document.getElementById("grid");
    if(numRows > 0){
        table.deleteRow(numRows - 1);
        numRows--;
    }
}

// Remove a column 
function removeC() { 
    let table = document.getElementById("grid");
    if(numCols > 0){ //iterate through rows, and delete last cell of each row.
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(-1);
        }
        numCols--;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr"); // Get all of the rows

    //nested loop to iterate through entire grid.
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td"); // Get all of the cells in this row
        for (let j = 0; j < cells.length; j++) {
            if(cells[j].style.backgroundColor == "" | cells[j].style.backgroundColor == "white") //Check to see if colored or not
            {
                cells[j].style.backgroundColor = colorSelected; // Set the background color of each cell
            } 
        }
    }
}

//Fill all cells with selected color
function fillAll() {
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr"); // Get all of the rows

    //nested loop to iterate through entire grid.
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td"); // Get all of the cells in this row
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = colorSelected; // Set the background color of each cell
        }
    }
}

// Clear all cells
function clearAll(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr"); // Get all of the rows

    //nested loop to iterate through entire grid.
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td"); // Get all of the cells in this row
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = "white"; // Set the background color of each cell back to white
        }
    }
}