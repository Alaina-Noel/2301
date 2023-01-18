var lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  let charMap = new Map();
  let start = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      start = Math.max(charMap.get(s[i]), start);
    }
    charMap.set(s[i],i+1);
    longestSubstring = Math.max(longestSubstring, i - start + 1);
  }
  return longestSubstring;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("tmmzuxt"));
// lengthOfLongestSubstring("aab");

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.