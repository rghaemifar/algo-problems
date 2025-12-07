/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function getShit(t, bigStr) {
  let i = 1;
  while (true) {
    if (i > t.length) break;
    if (t.length % i !== 0) {
      // not dividable
      i++;
      continue;
    }
    const ptr = t.length / i;
    if (ptr < 1) break;

    const divisor = t.substring(0, ptr);
    if (bigStr.length % divisor.length !== 0) {
      i++;
      continue;
    }

    let wrongT = false;
    for (let j = 0; j < i; j++) {
      if (t.substring(j * ptr, (j + 1) * ptr) !== divisor) {
        wrongT = true;
        break;
      }
    }
    if (wrongT) {
      i++;
      continue;
    }
    t = divisor;

    // if it matches bigStr
    if (bigStr.length % t.length !== 0) {
      i++;
      continue;
    }
    const rep = bigStr.length / t.length;
    let trueT = true;
    for (let j = 0; j < rep; j++) {
      const sub = bigStr.substring(j * t.length, (j + 1) * t.length);
      if (sub !== t) {
        trueT = false;
        break;
      }
    }
    if (trueT) return t;

    i++;
  }

  return "";
}

var gcdOfStrings = function (str1, str2) {
  return str1.length > str2.length ? getShit(str2, str1) : getShit(str1, str2);
};

console.log(
  gcdOfStrings(
    "CTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXK",
    "CTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXK"
  )
);
