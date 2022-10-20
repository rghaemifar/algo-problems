const { bigShit } = require("./example")

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const peak = Math.max(...height)
  const len = height.length

  let totalTrappedBlocks = 0
  for (let row = 1; row <= peak; row++) {
    let prevBlockIndex
    for (let index = 0; index < len; index++) {
      const columnHeight = height[index]
      const isBlock = columnHeight >= row
      if (!isBlock) continue

      if (prevBlockIndex !== undefined)
        totalTrappedBlocks += index - prevBlockIndex - 1
      prevBlockIndex = index
    }
  }

  return totalTrappedBlocks
}

const arr = bigShit
const startTime = new Date()
const res = trap(arr)
const endTime = new Date()
console.log(`${res} blocks; in ${endTime - startTime} ms`)
