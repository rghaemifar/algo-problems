/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  let ptr = Math.ceil(end / 2)

  while (true) {
    const value = nums[ptr]
    if (target === value) {
      return ptr
    }
    if (end - start <= 1) {
      if (target === nums[end]) return end
      if (target === nums[start]) return start
      if (target > nums[end]) return end + 1
      if (target > nums[start]) return start + 1
      if (target < nums[start]) return start
    }
    if (target > value) {
      start = ptr
      ptr = start + Math.ceil((end - start) / 2)
    } else {
      end = ptr
      ptr = start + Math.floor((end - start) / 2)
    }
  }
}
