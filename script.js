// Global array to store customer objects
let customers = [];

// Function to add customer
function addCustomer() {

    // Get values from HTML input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // Create customer object
    let customer = {
        name: name,
        email: email,
        age: age,
        height: height,
        weight: weight
    };

    // Add customer object to global array
    customers.push(customer);

    // Display customers
    displayCustomers();

    // Clear the form
    clearForm();
}


// Function to display customers in a table
function displayCustomers() {

    let output = `
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Height</th>
                <th>Weight</th>
            </tr>
    `;

    // Iterate through the customer array
    customers.forEach(function(customer) {

        output += `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.age}</td>
                <td>${customer.height}</td>
                <td>${customer.weight}</td>
            </tr>
        `;

    });

    output += `</table>`;

    // Display table in HTML
    document.getElementById("customerTable").innerHTML = output;
}


// Function to clear input fields
function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
}
