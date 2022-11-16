/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  nums.unshift(...nums.splice(nums.length - (k % nums.length)))
}

const nums = [1, 2]
rotate(nums, 5)
console.log(nums)
