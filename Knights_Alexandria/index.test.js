const { sumOfArray, isPalindrome } = require("./main");

describe("Assignment Function Tests", () => {
  test("sumOfArray logic", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
    expect(sumOfArray("not an array")).toBe(0);
  });
  test("isPalindrome logic", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});
