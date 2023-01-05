function addOne(numbersArray) {
  return (parseInt(numbersArray.join("")) + 1).toString().split("");
}

console.log(addOne([1, 2, 3]))