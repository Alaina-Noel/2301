// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary
//  representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const translateBinary = (integer) => {
  if (integer === 0) return 0;
  let binaryResult = [];
  while(integer >= 1) {
    if (integer % 2 === 0) {
      binaryResult.unshift(0);
      integer = integer/2;
    } else {
      binaryResult.unshift(1);
      integer = Math.floor(integer/2);
    }
  }
  let total = 0;
  for (const number of binaryResult) {
    if (number === 1) {
      total += 1;
    }
  }
  return total;
}
//could combine this into one step and just count the number of 1s that appear