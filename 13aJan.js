const isPalendrome = (string) => {
  // let i = 0;
  let j = string.length - 1;
  for (let i = 0; i < Math.floor(string.length / 2, 1) ; i++) {
    if (string[i] != string[j]) {
      return false;
    }
    j--;
  }
  return true;
}

console.log(isPalendrome("peoplep"));
console.log(isPalendrome("poop"));
console.log(isPalendrome("personhood"));
console.log(isPalendrome("apfpa"));