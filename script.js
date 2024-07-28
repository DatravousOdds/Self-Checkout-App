const taxRate = 0.055;
const tax = 0.00;
const total = 0.00;

let item1 = 0.00;
let item2 = 0.00;
let item3 = 0.00;



while (true) {
  item1 = prompt("Enter the price of item 1: ");
  if (!isNaN(item1) && item1.trim() !== "") {
    item1 = parseInt(item1);
    console.log(`${item1} was converted to ${typeof item1}`);
  } else {
    alert("Invalid input. Please enter a valid number for item 1.");
  }
  if (isNaN(item2) && item2.trim() !== "") {
    item2 = parseInt(item2);
    console.log(`${item2} was converted to ${typeof item2}`);
  } else {
    alert("Invaild input. Please enter a valid number.");
  }
  if (isNaN(item3) && item3.trim() !== "") {
    item3 = parseInt(item3);
    console.log(`${item2} was converted to ${typeof item3}`);
  } else {
    alert("Invaild input. Please enter a valid number.");
  }
}