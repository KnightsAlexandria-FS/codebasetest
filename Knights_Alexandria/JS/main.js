function sumOfArray(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, curr) => (typeof curr == 'number' ? acc + curr : acc), 0);
}
module.exports = {
  sumOfArray,
};

function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  if (str.length == 0) return true;
  const cleanStr = str.toLowerCase();
  return cleanStr == cleanStr.split("").reverse().join("");
}

module.exports = {
  sumOfArray,
  isPalindrome
};
