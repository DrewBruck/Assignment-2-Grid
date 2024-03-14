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