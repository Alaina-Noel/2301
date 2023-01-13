//fizzBuzz

const fizzBuzz = (nums) => {
  nums.forEach((num,i) => {
    if (num % 15 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      "Buzz";
    } else {
      num;
    }
  })
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15, 30]));
