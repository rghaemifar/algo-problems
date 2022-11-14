var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  let ptr = Math.ceil((end - start) / 2)
  while (true) {
    if (end - start <= 1) {
      if (nums[start] === target) return start
      if (nums[end] === target) return end
      return -1
    }

    const value = nums[ptr]
    if (value === target) return ptr
    if (value < target) {
      start = ptr
      ptr = start + Math.ceil((end - start) / 2)
    }
    if (value > target) {
      end = ptr
      ptr = start + Math.floor((end - start) / 2)
    }
  }
}

const arr = [-42, -2, 3, 5, 6, 7, 13, 1264]
const index = search(arr, -2)
console.log(index ? `Found in index ${index}` : '404 Not Found')
