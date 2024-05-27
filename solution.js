function fizzBuzz(i) {
  if (i % 3 == 0 && i % 5 == 0) {
    return `${i} fizzBuzz`;
  } else if (i % 3 == 0) {
    return `${i} Fizz`;
  } else if (i % 5 == 0) {
    return `${i} Buzz`;
  } else {
    return i;
  }
}
console.log(fizzBuzz(15));
module.exports = { fizzBuzz };
