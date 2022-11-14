const firstBad = 1
const isBadVersion = function (guess) {
  if (guess === firstBad) {
    console.log('found the first bad: ', guess)
    return true
  }
  if (guess >= firstBad) return true
  return false
}

const search = function (n) {
  // if isBadVersion(guess) === true : is smaller
  // if isBadVersion(guess) === false : is greater

  let start = 1
  let end = n
  let guess = Math.ceil(n / 2)

  while (true) {
    const isGuessBad = isBadVersion(guess)
    if (Math.abs(end - start) <= 1) {
      if ((guess === start && isGuessBad) || isBadVersion(start)) return start
      return end
    }
    if (isGuessBad) {
      end = guess
      guess = start + Math.floor((end - start) / 2)
    } else {
      start = guess
      guess = start + Math.ceil((end - start) / 2)
    }
  }
}

const res = search(2)
console.log({ res })
