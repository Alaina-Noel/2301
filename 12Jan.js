function sortArray(array) {
  let odds_holder = [];
  let result = [];
  for (const num of array) {
    if (num % 2 === 0) {
      result.push(num); 
    } else {
      result.push(undefined);
      odds_holder.push(num);
    }
  }
  odds_holder.sort(function(a, b){return a-b});
  for (let i = 0; i < result.length; i++) {
    if (result[i] === undefined) {
      result[i] = odds_holder.shift();
    }
  }
  return result;
}

function sortArray(array) {
  let oddsHolder = [];
  let result = [];

  array.forEach((num) => {
    if (num % 2 === 0) {
      result.push(num);
    } else {
      result.push('');
      odds_holder.push(num);
    }
  })

  oddsHolder.sort(function(a, b) { return a - b });

  result.forEach((num, i) => {
    if (result[i] === '') {
      result[i] = oddsHolder.shift();
    }
  })

  return result;
}
  
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// [] => []
//[4, 6, 2] => [4, 6, 2]
// [4, 6] => [4, 6]
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//spread operator - 
//