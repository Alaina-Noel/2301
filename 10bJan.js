// #Example 1
// Input: [1, 2, 3, 4]
// Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

// #Example 2
// Input: [54, 77]
// Output[[54, 77]]

// #Example 3
// Input: []
// Output: []

// #Example 4
// Input: [45]
// Output: []

//Example 5
//Input: [1, 2, 3, 4, 5,5]
//Output: [[1, 2],[1, 3],[1, 4],[1, 5],[2,3], [2, 4], [2, 5],[3,4],[3, 5],[4, 5]]


// set i = array.length - 1 //increment i when done//j = 0
//unique_pairs = []...i times do [input[j],input[j + 1]]
//increment j as well.

const uniqueSets = (nums) => {
  let uniqueNums = [];
  let uniqueSubset = [];
  for (const n of nums) {
    if (!uniqueNums.includes(n)) {
      uniqueNums.push(n);
    }
  }
  for (let i = 0; i < uniqueNums.length; i++) {
    for (let j = 1; j < uniqueNums.length; j++) {
      if (i != j && i < j) {
        uniqueSubset.push([nums[i],nums[j]]);
        }
      }
    }
  return uniqueSubset;
}