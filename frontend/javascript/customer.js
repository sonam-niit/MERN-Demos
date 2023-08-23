let customers = [];

function addCustomer(cust) {
    customers.push(cust);
    console.log("Customer Added Successfully")
}

function getAllCustomers() {
    return customers;
}

function removeCustomer(email) {

    const index = customers.findIndex(function (cust) { return cust.email == email })
    //remove any element from an array use splice function
    console.log(index);
    if (index <0) {
        console.log("No user found for delete");
    } else {
        customers.splice(index, 1);
        console.log("Deleted Successfully");
    }

}