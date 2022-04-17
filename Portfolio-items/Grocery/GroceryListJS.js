
// creating a function to get egg quantity from the user and display it in quantity column

function printEggQuantity() {
    let eggQuantity = prompt("Please enter Egg quantity in dozen");            // take input from user when quantity button is clicked
    eggQuantity = eggQuantity.trim();                                       // removing whitespace from both side of the string 
    while (isNaN(eggQuantity) || eggQuantity == "") {                    // check if the string input is an integer and not empty
        alert("Wrong Input");
        eggQuantity = prompt("Please enter Egg quantity in dozen");
        eggQuantity = eggQuantity.trim();
    }
    eggQuantity = parseInt(eggQuantity);                                 // convert the string to integer
    document.getElementById("eggQuantity").innerHTML = eggQuantity;     // print the quantity in the quantity tab
}

// creating a function to get quantity of apples from the user and display it in quantity column

function printAppleQuantity() {
    let appleQuantity = prompt("Please enter Apple quantity in pounds");        // take input from user when quantity button is clicked
    appleQuantity = appleQuantity.trim();                                   // removing whitespace from both side of the string 
    while (isNaN(appleQuantity) || appleQuantity == "") {                   // checking if the string input is an integer and not empty
        alert("Wrong Input");
        appleQuantity = prompt("Please enter Apple quantity in dozen");
        appleQuantity = appleQuantity.trim();
    }
    appleQuantity = parseInt(appleQuantity);                                // convert the string to integer
    document.getElementById("appleQuantity").innerHTML = appleQuantity      // print the quantity in the quantity tab
}

// creating a function to get quantity of spinach from the user and display it in quantity column

function printSpinachQuantity() {
    let spinachQuantity = prompt("Please enter Spinach quantity in pounds");     // take input from user when quantity button is clicked
    spinachQuantity = spinachQuantity.trim();                                 // removing whitespace from both side of the string 
    while (isNaN(spinachQuantity) || spinachQuantity == "") {                 // checking if the string input is an integer and not empty
        alert("Wrong Input");
        spinachQuantity = prompt("Please enter Spinach quantity in pounds");
        spinachQuantity = spinachQuantity.trim();
    }
    spinachQuantity = parseInt(spinachQuantity);                                  // convert the string to integer
    document.getElementById("spinachQuantity").innerHTML = spinachQuantity      // print the quantity in the quantity tab
}

// creating a function to get quantity of broccoli from the user and display it in quantity column

function printBroccoliQuantity() {
    let broccoliQuantity = prompt("Please enter Broccoli quantity in pounds");      // take input from user when quantity button is clicked
    broccoliQuantity = broccoliQuantity.trim();                                  // removing whitespace from both side of the string
    while (isNaN(broccoliQuantity) || broccoliQuantity == "") {               // checking if the string input is an integer and not empty
        alert("Wrong Input");
        broccoliQuantity = prompt("Please enter Broccoli quantity in pounds");
        broccoliQuantity = broccoliQuantity.trim();
    }
    broccoliQuantity = parseInt(broccoliQuantity);                                   // convert the string to integer
    document.getElementById("broccoliQuantity").innerHTML = broccoliQuantity;       // print the quantity in the quantity tab
}

// creating a function to get quantity of milk from the user and display it in quantity column

function printMilkQuantity() {
    let milkQuantity = prompt("Please enter Milk quantity in pounds");           // take input from user when quantity button is clicked
    milkQuantity = milkQuantity.trim();                                         // removing whitespace from both side of the string 
    while (isNaN(milkQuantity) || milkQuantity == "") {                       // checking if the string input is an integer and not empty
        alert("Wrong Input");
        milkQuantity = prompt("Please enter Milk quantity in pounds");
        milkQuantity = milkQuantity.trim();
    }
    milkQuantity = parseInt(milkQuantity);                                   // convert the string to integer
    document.getElementById("milkQuantity").innerHTML = milkQuantity;        // print the quantity in the quantity tab
    return milkQuantity;
}

// When Calculate Total amount button is clicked, printReceipt function is called to display the receipt

function printReceipt() {
    let confirmation = confirm("Do you want to continue to payment?");  // confirming if the user is done shopping
    let custName = null;
    if (confirmation == true) {                                         // in case the user says Ok
        do {
            custName = prompt("Please enter your name");                // taking customer's name from user
        }                                 
        while (isNaN(custName) == false || custName.trim() == "" || !custName);         // Checking the name is String
        // getting the quantity of apples that user entered, from the table and converting the value to integer                         
        let appleQuantity = parseInt(document.getElementById('appleQuantity').textContent);
        let applePrice = appleQuantity * 3;                                                // total cost of Apples
        // getting the quantity of eggs that user entered, from the table and converting the value to integer    
        let eggQuantity = parseInt(document.getElementById('eggQuantity').textContent);
        let eggPrice = eggQuantity * 4;                                                 // total cost of Eggs
        // getting the quantity of spinach that user entered, from the table and converting the value to integer   
        let spinachQuantity = parseInt(document.getElementById('spinachQuantity').textContent);
        let spinachPrice = spinachQuantity * 6;                                                // total cost of Spinach
        // getting the quantity of broccoli that user entered, from the table and converting the value to integer    
        let broccoliQuantity = parseInt(document.getElementById('broccoliQuantity').textContent);
        let broccoliPrice = broccoliQuantity * 3;                                         // total cost of Broccoli  
        // getting the quantity of milk that user entered, from the table and converting the value to integer                 
        let milkQuantity = parseInt(document.getElementById('milkQuantity').textContent);
        let milkPrice = milkQuantity * 2;                                               // total cost of milk

        // total cost of all the items purchased
        let totalCost = applePrice + eggPrice + spinachPrice + broccoliPrice + milkPrice;

        let table = '<table border= "1" align="center">';   //creating a table for receipt 
        // printing customer's name with the 1st letter in Upper case
        table += `<tr><h2> Receipt </h2> <hr> <h4> Customer name : ${custName.charAt(0).toUpperCase() + custName.slice(1)} </h4></tr>`;
        table += '<tr>'
        table += '<td> Item </td>';
        table += '<td> Quantity </td>';
        table += '<td> Amount </td>';
        table += '</tr>';

        for (var i = 0; i < 5; i++) {
            table += '<tr>';
            if (i == 0 && appleQuantity != 0) {             // printing apple quantity and cost
                table += '<td> Apples </td>';
                table += `<td> ${appleQuantity} lb </td>`;
                table += `<td> $ ${applePrice} </td>`;
            }
            if (i == 1 && eggQuantity != 0) {               // printing egg quantity and cost
                table += '<td> Eggs </td>';
                table += `<td> ${eggQuantity} doz </td>`;
                table += `<td> $ ${eggPrice} </td>`;
            }
            if (i == 2 && spinachQuantity != 0) {           // printing spinach quantity and cost
                table += '<td> Spniach </td>';
                table += `<td> ${spinachQuantity} lb </td>`;
                table += `<td> $ ${spinachPrice} </td>`;
            }
            if (i == 3 && broccoliQuantity != 0) {          // printing broccoli quantity and cost
                table += '<td> Broccoli </td>';
                table += `<td> ${broccoliQuantity} lb </td>`;
                table += `<td> $ ${broccoliPrice} </td>`;
            }
            if (i == 4 && milkQuantity != 0) {              // printing milk quantity and cost
                table += '<td> Milk </td>';
                table += `<td> ${milkQuantity} L </td>`;
                table += `<td> $ ${milkPrice} </td>`;
            }
            table += '</tr>';
        }
        table += '<tr>';
        table += `<td colspan = '2' style='border:none;'> GST (13%) </td>`;            // total GST with decimal dixed to two places
        table += `<td style='border:none;'> $ ${(totalCost * 0.13).toFixed(2)} </td>`;
        table += '</tr>';

        table += '<tr>'
        table += `<td colspan = '2' style='border:none;'> Total </td>`;
        table += `<td style='border:none;'> $ ${(totalCost * 1.13).toFixed(2)} </td>`;    // printing total cost with decimal dixed to two places
        table += '</tr>';

        table += '</table>';
        document.getElementById("receipt").innerHTML = table;   //printing the receipt
    }
}
