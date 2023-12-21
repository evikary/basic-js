const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

const num = 152;

function deleteDigit(n) {
  const wordN = String(n);
  let arr = [];

  for (let item of wordN) {
    let a = wordN.replace(item, "");
    arr.push(+a);
  }
  const res = Math.max(...arr);
  return res;
}

console.log(deleteDigit(num));

module.exports = {
  deleteDigit,
};
