const taxRate = 0.055;
let tax = 0.00;
let subTotal = 0.00;
let total = 0.00;
let itemCounter = 1;

let input = ""
let quanitity = 0;


while (true) {
  input = prompt("Enter the price of item " + itemCounter + " or Q = exit:");
  quanitity = prompt("Enter the quanitity of item " + itemCounter + " or Q = exit:");

  if (input === "Q" || quanitity === "Q") {
    break;
  } else {
    if (isNaN(input) || isNaN(quanitity)) {
      alert("Invalid input. Please enter a valid number.");
      continue;
    }

    // convert into numerical data
    input = parseFloat(input);
    quanitity = parseFloat(quanitity);

    // add one to the counter
    itemCounter++;

    // calculate the subtotal
    subTotal += input * quanitity;

    // calculate tax
    tax = subTotal * taxRate;

    // calculate total
    total = subTotal + tax;

  }
}

console.log("Subtotal: $" + subTotal.toFixed(2));
console.log("Tax: $" + tax.toFixed(2));
console.log("Total: $" + total.toFixed(2));