const taxRate = 0.055;
let tax = 0.00;
let subTotal = 0.00;
let total = 0.00;

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
    tax = subTotal * taxRate;
    total =  tax + subTotal;
    console.log(`Yout subtotal is: ${subTotal}`);
    console.log(`Your tax is: ${tax}`);
    console.log(`Your total is: ${total}`);
    isValidInput = false;
  } else {
    alert("Invalid input. Please enter a valid number.");
  }

}