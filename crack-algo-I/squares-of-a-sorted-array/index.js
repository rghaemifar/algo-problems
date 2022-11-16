const array = [-2, 3, 8]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  if (nums.length === 0) return []
  const sortedSquareArray = []
  const boundary = nums.findIndex((num) => num >= 0)
  let posIndex = boundary === -1 ? nums.length - 1 : boundary
  let negIndex = posIndex - 1
  while (true) {
    if (negIndex < 0 && posIndex >= nums.length) break
    if (
      isNaN(nums[posIndex] ** 2) ||
      nums[posIndex] ** 2 > nums[negIndex] ** 2
    ) {
      sortedSquareArray.push(nums[negIndex] ** 2)
      negIndex--
    } else if (
      isNaN(nums[negIndex] ** 2) ||
      nums[posIndex] ** 2 <= nums[negIndex] ** 2
    ) {
      sortedSquareArray.push(nums[posIndex] ** 2)
      posIndex++
    }
  }

  return sortedSquareArray
}

const res = sortedSquares(array)
console.log(res)
