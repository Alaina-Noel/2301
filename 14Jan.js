var groupAnagrams = function(strs) {
  if (strs.length === 0) {
    return [];
  } else if (strs.length === 1) {
    return [strs];
  } else {
    let groupedWords = {};
    for (let i=0; i<strs.length; i++) {
      if (groupedWords[strs[i].split('').sort().join('')]) {
        groupedWords[strs[i].split('').sort().join('')].push(strs[i]);
      } else {
        groupedWords[strs[i].split('').sort().join('')] = [strs[i]];
      }
    }
    return Object.values(groupedWords);
  }
};

// console.log(groupAnagrams([]));
// console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

//result container - []
//go through each of the words
//build a hashmap that has the letter as the key and total number of that letter
//as the value.
//build a hashmap where the key is the first word and the value is 
//groupedWords = {eat:["eat","tea","ate"],tan:["tan","nat"],bat:["bat"]}
// groupedWords.values() -> returns [["bat"],["nat","tan"],["ate","eat","tea"]]


//return result