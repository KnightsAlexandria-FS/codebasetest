function sumOfArray(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, curr) => (typeof curr == 'number' ? acc + curr : acc), 0);
}
module.exports = {
  sumOfArray,
};
