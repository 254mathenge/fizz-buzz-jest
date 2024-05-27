const { fizzBuzz } = require("./solution.js");

describe("fizzBuzz", () => {
  it("returns the string FizzBuzz if the number is divisible by both 3 or 5", () => {
    expect(fizzBuzz(15)).toEqual("15 fizzBuzz");
  });
  it("returns the string Fizz if number is divisible by 3", () => {
    expect(fizzBuzz(3)).toEqual("3 Fizz");
  });
  it("returns the string Buzz if the number is divisible by 5", () => {
    expect(fizzBuzz(5)).toEqual("5 Buzz");
  });
  it("returns the number if the number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
});
