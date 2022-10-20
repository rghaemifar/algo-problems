const { bigShit } = require("./example")

var trap = function (height) {
  let candids = []

  for (let candid = 0; candid < height.length; candid++) {
    let CandidStart = -1
    let CandidEnd = -1

    for (let i = 0; candid + i < height.length - 1 && candid - 1 > 0; i++) {
      if (height[candid + i] >= height[candid + i + 1]) {
        break
      }

      if (height[candid - i] >= height[candid - i - 1]) {
        break
      }

      CandidStart = candid - i - 1
      CandidEnd = candid + i + 1
    }

    if (CandidEnd != -1 && CandidStart != -1) {
      candids.push({ CandidStart, CandidEnd })
      candid = CandidEnd
    }
  }

  let aggvol = 0
  console.log(candids)
  candids.forEach((x) => {
    for (let i = x.CandidStart; i < x.CandidEnd; i++) {
      aggvol += Math.min(height[x.CandidStart], height[x.CandidEnd]) - height[i]
    }
  })
  return aggvol
}

const arr = bigShit
const res = trap(arr)
console.log({ res })
