// Initialize the array to hold the table data
var to_verify = [];

// Function to create the "to_verify" table data
function makeTable() {
  for (let i = 0; i < 9; i++) {
    to_verify[i] = [];
    for (let j = 0; j < 9; j++) {
      to_verify[i][j] = `cell in row ${i}, column ${j}`;
    }
  }
};

// Sample data
var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 6";

// Function to update the content of the two-dimensional array
function F11() {
  for (let i = 0; i < array_number.length; i++) {
    const rowData = array_number[i].split(' ');

    for (let j = 0; j < rowData.length; j++) {
        to_verify[i][j] = rowData[j];
    }
  }
};

// Function to display the content of the "to_verify" table as an HTML table
function F12() {
  // Generate the HTML table structure based on the table data
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < to_verify.length; i++) {
    const rowData = to_verify[i];
    const row = document.createElement("tr");

    for (let j = 0; j < rowData.length; j++) {
        const cellData = rowData[j];
        const cell = document.createElement("td");
        const cellText = document.createTextNode(cellData);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
};

// Call the functions when the script is loaded
// makeTable();
// F11();
// F12();
