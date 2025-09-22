// Get the input from command line arguments
const input = process.argv[2];

// Function to validate input and print pattern
function printPattern(n) {
  if (n < 1 || n > 5 || isNaN(n)) {
    throw new Error("Input must be a number between 1 and 5");
  }

  for (let i = n; i >= 1; i--) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += '* ';
    }
    console.log(line.trim());
  }
}

try {
  const num = Number(input);
  printPattern(num);
} catch (err) {
  console.error("Error:", err.message);
}
