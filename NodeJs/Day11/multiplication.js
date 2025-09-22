const readline = require('readline');

function multiply(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 > 0 && num2 > 0) {
      resolve(num1 * num2);
    } else {
      reject('Both numbers must be positive!');
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (input1) => {
  const num1 = parseFloat(input1);

  rl.question('Enter second number: ', (input2) => {
    const num2 = parseFloat(input2);

    multiply(num1, num2)
      .then(result => {
        console.log(`Multiplication result: ${result}`);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      })
      .finally(() => rl.close());
  });
});
