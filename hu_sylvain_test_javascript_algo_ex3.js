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

document.addEventListener('DOMContentLoaded', function() {
  // check rows
  function F31(to_check) {
    const incorrectRows = [];

    for (let i = 0; i < to_check.length; i++) {
      const isValid = F21(to_check[i]);
      if (!isValid) {
        incorrectRows.push({ line: i + 1, row: to_check[i] });
      }
    }

    if (incorrectRows.length > 0) {
      const table = document.createElement("table");

      for (const row of incorrectRows) {
        const newRow = table.insertRow();
        const lineCell = newRow.insertCell(0);
        lineCell.textContent = `Line ${row.line} incorrect`;
        lineCell.style.border = "1px double black";
        const rowData = row.row.split(' ');
        for (const num of rowData) {
            const numCell = newRow.insertCell();
            numCell.textContent = num;
            numCell.style.border = "1px solid black";
        }
      }

      document.body.appendChild(table);
    }
  };

  //check columns
  function F32(to_check) {
    const incorrectColumns = [];

    // Iterate over each column
    for (let col = 0; col < to_check[0].length; col += 2) {
      const columnData = [];

      // Extract data from the column
      for (let row = 0; row < to_check.length; row++) {
        // Remove blank spaces and split the string into individual characters
        const rowData = to_check[row][col].replace(/\s/g, '').split('');
        columnData.push(parseInt(rowData[0], 10)); // Assuming each cell contains a single digit
      }

      // Check if the column is valid using F21 function
      const isValid = F21(columnData.join(' '));

      // If column is invalid, add it to incorrectColumns array
      if (!isValid) {
        incorrectColumns.push({ column: col + 1, data: columnData });
      }
    }

    // If there are any incorrect columns, create a table to display them
    if (incorrectColumns.length > 0) {
      const table = document.createElement("table");

      for (const column of incorrectColumns) {
        const newRow = table.insertRow();
        const colCell = newRow.insertCell(0);
        colCell.textContent = `Column ${Math.ceil(column.column / 2)} incorrect`;
        colCell.style.border = "1px double black";

        for (const num of column.data) {
          const numCell = newRow.insertCell();
          numCell.textContent = num;
          numCell.style.border = "1px solid black";
        }
      }

      document.body.appendChild(table);
    }
  };

  // check regions
  function F33(array_number) {
    const incorrectRegions = [];
    const regionSize = 3;

    for (let region = 1; region <= 9; region++) {
      const rowOffset = Math.floor((region - 1) / regionSize) * regionSize;
      const colOffset = ((region - 1) % regionSize) * regionSize;

      const regionData = [];

      for (let i = rowOffset; i < rowOffset + regionSize; i++) {
        for (let j = colOffset; j < colOffset + regionSize; j++) {
          // Remove blank spaces and split the string into individual characters
          const rowData = array_number[i].replace(/\s/g, '').split('');
          regionData.push(parseInt(rowData[j], 10));
        }
      }

      if (!F21(regionData.join(' '))) {
        incorrectRegions.push({ region: region, data: regionData });
      }
    }

    if (incorrectRegions.length > 0) {
      const table = document.createElement("table");

      for (const region of incorrectRegions) {
        const newRow = table.insertRow();
        const regionCell = newRow.insertCell(0);
        regionCell.textContent = `Region ${region.region} incorrect`;
        regionCell.style.border = "1px double black";

        for (const num of region.data) {
          const numCell = newRow.insertCell();
          numCell.textContent = num;
          numCell.style.border = "1px solid black";
        }
      }

      document.body.appendChild(table);
    }
  };

  // Question 4: Function to extract values into a table of 9 positions
  function extractValuesToTable() {
    const table = [];
    console.log("Enter the numbers for each row of the Sudoku grid:");
    for (let i = 0; i < 9; i++) {
      const row = [];
      const input = prompt(`Enter numbers for row ${i + 1}:`);
      if (input.length !== 9) {
        console.log("Invalid input! Please enter 9 numbers.");
        return;
      }
      for (let j = 0; j < 9; j++) {
        const num = parseInt(input[j], 10);
        if (isNaN(num) || num < 1 || num > 9) {
          console.log("Invalid input! Please enter numbers between 1 and 9.");
          return;
        }
        row.push(num);
      }
      table.push(row);
    }
    return table;
  }

  F31(array_number);
  F32(array_number);
  F33(array_number);
});
