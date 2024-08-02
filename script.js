const taxRate = 0.055;
let tax = 0.00;
let subTotal = 0.00;
let total = 0.00;
let itemCounter = 1;

let input = ""
let quanitity = 0;


while (input !== "stop") {
  input = prompt("Enter the price of item " + itemCounter + " or Q = exit:");
  quanitity = prompt("Enter the quanitity of item " + itemCounter + " or Q = exit:");

  if (input === "Q" || quanitity === "Q") {
    break;
  } else {
    // add one to the counter
    itemCounter++;
    subTotal += input * quanitity;
    // compute tax
    tax = subTotal * taxRate;
    // compute total
    total = subTotal + tax;

  }
}

console.log("Subtotal: $" + subTotal.toFixed(2));
console.log("Tax: $" + tax.toFixed(2));
console.log("Total: $" + total.toFixed(2));