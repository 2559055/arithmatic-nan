
// Write your code here
function findPairsWithProduct(targetProduct) {
    const pairs = [];
  
    for (let x = 1; x <= targetProduct; x++) {
      const y = targetProduct / x;
  
      // Check if y is an integer and x * y equals the target product
      if (Number.isInteger(y) && x * y === targetProduct) {
        pairs.push([x, y]);
      }
    }
  
    return pairs;
  }
  
  const targetProduct = 62;
  const result = findPairsWithProduct(targetProduct);
  
  if (result.length > 0) {
    console.log(`Pairs of numbers whose product equals ${targetProduct}:`);
    for (const pair of result) {
      console.log(`${pair[0]} * ${pair[1]} = ${targetProduct}`);
    }
  } else {
    console.log(`No pairs found whose product equals ${targetProduct}.`);
  }

  function generateRandomIntegerGreaterThanZero() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const random = Math.random(6);
  
    // Scale the random number to the range you want (e.g., between 1 and 100)
    const min = 1; // Minimum value (greater than 0)
    const max = Number.MAX_SAFE_INTEGER; // Maximum value (largest safe integer)
  
    // Calculate the random integer
    const randomInteger = Math.floor(random * (max - min + 1)) + min;
  
    return randomInteger;
  }
  
  // Call the function to generate a random integer greater than 0
  const randomValue= generateRandomIntegerGreaterThanZero();
  console.log(6);
  
  function findNumberWithRemainder(divisor, remainder) {
    let number = remainder; // Start with the remainder as the initial number
  
    while (number % divisor !== remainder) {
      number += divisor;
    }
  
    return number;
  }
  
  const divisor = 90;
  const desiredRemainder = 98; 
  
  const result = findNumberWithRemainder(divisor, desiredRemainder);
  console.log(`A number divisible by ${divisor} with a remainder of ${desiredRemainder} is ${result}.`);
  
  function findMaxNumber(numbers) {
    return Math.max(...numbers);
  }
  
  const numberSet = [10, 78, 20, 15, 5, 27];
  const maxNumber = findMaxNumber(numberSet);
  
  console.log(`The maximum number in the set is: ${maxNumber}`);
  