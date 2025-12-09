/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 1;
  for (let i = 0, len = candies.length; i < len; i++) {
    if (candies[i] > max) max = candies[i];
  }

  const bools = [];
  for (let i = 0, len = candies.length; i < len; i++) {
    bools[i] = candies[i] + extraCandies >= max;
  }

  return bools;
};

console.log(kidsWithCandies([12, 1, 12], 10));

/**
Constraints:
    n == candies.length
    2 <= n <= 100
    1 <= candies[i] <= 100
    1 <= extraCandies <= 50
 */
