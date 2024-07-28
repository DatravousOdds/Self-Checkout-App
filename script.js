const taxRate = 0.055;
const tax = 0.00;
let subTotal = 0.00;
const total = 0.00;

let item1 = 0.00;
let item2 = 0.00;
let item3 = 0.00;


let isValidInput = true;

while (isValidInput) {
  item1 = parseFloat(prompt("Enter price for item 1: "));
  item2 = parseFloat(prompt("Enter price for item 2: "));
  item3 = parseFloat(prompt("Enter price for item 3: "));
  if (!isNaN(item1) > 0 && !isNaN(item2) > 0 && !isNaN(item3) > 0) {
    subTotal += item1 + item2 + item3;
    alert(subTotal);
    isValidInput = false;
  } else {
    alert("Invalid input. Please enter a valid number.");
  }

}