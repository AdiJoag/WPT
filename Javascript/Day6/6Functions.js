/*Write 6 Function in Script display, addition, subtraction,
multiply, division, calculate
Accept data from user 2 numbers and Which Operation they want to perform
according to choice call particular function and display result 
using callback function concept 
calculate(n1 , n2 , mcallBack)
addition (n1 , n2 , display); */
		
// Function to display the result
function display(result) {
  console.log("The result is: " + result);
}

// Function for addition
function addition(n1, n2, callback) {
  const sum = n1 + n2;
  callback(sum);
}

// Function for subtraction
function subtraction(n1, n2, callback) {
  const difference = n1 - n2;
  callback(difference);
}

// Function for multiplication
function multiply(n1, n2, callback) {
  const product = n1 * n2;
  callback(product);
}

// Function for division
function division(n1, n2, callback) {
  if (n2 === 0) {
    callback("Error: Cannot divide by zero.");
  } else {
    const quotient = n1 / n2;
    callback(quotient);
  }
}

// Main function to perform the calculation based on user choice
function calculate(n1, n2, operation, callback) {
  switch (operation) {
    case 'addition':
      addition(n1, n2, callback);
      break;
    case 'subtraction':
      subtraction(n1, n2, callback);
      break;
    case 'multiply':
      multiply(n1, n2, callback);
      break;
    case 'division':
      division(n1, n2, callback);
      break;
    default:
      callback("Error: Invalid operation.");
  }
}

// Example usage
// Replace with user input logic in a real application
const num1 = 10;
const num2 = 5;
const userChoice = 'addition'; // This would be the user's input

console.log("Performing " + userChoice + " operation on " + num1 + " and " + num2);

// Call the calculate function with the chosen operation and the display callback
calculate(num1, num2, userChoice, display);
   


