// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var containsDuplicate = function(nums) {
    let numsMap = new Map;
    for (let i = 0; i < nums.length; i++) {
      if (numsMap[nums[i]]) {
        return true;
      } else {
        numsMap[nums[i]] = "hello";
        console.log(numsMap);
      }
    }
    return false;
};

numbers1 = [1, 2, 3, 1]
numbers2 =  [1,2,3,4]
numbers3 = [1,1,1,3,3,4,3,2,4,2]

console.log(containsDuplicate(numbers1));
console.log(containsDuplicate(numbers2));
console.log(containsDuplicate(numbers3));