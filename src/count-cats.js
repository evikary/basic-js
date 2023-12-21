const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const arr = [
  [0, 1, "^^"],
  [0, "^^", 2],
  ["^^", 1, 2],
];
function countCats(matrix) {
  let count = 0;
  const arr2 = matrix
    .flatMap((item) => [...item])
    .forEach((item) => {
      if (item === "^^") {
        count++;
      }
    });

  return count;
}

countCats(arr);

module.exports = {
  countCats,
};
