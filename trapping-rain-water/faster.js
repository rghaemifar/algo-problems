const { bigShit } = require("./example")

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height?.length
  if (!len) return 0
  let l = 0
  let r = len - 1
  let left_max = 0
  let right_max = 0
  let ret = 0

  while (l < r) {
    if (height[l] < height[r]) {
      // right will trap
      left_max = Math.max(left_max, height[l])
      ret += left_max - height[l]
      l++
    } else {
      // left will trap
      right_max = Math.max(right_max, height[r])
      ret += right_max - height[r]
      r--
    }
  }
  return ret
}

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const startTime = new Date()
const res = trap(arr)
const endTime = new Date()
console.log(`${res} blocks; in ${endTime - startTime} ms`)
