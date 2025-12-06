/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let i = 0;
  const min = word1.length > word2.length ? word2.length : word1.length;
  for (; i < min; i++) {
    res += word1[i];
    res += word2[i];
  }
  if (word1.length > word2.length) return (res += word1.slice(i));
  return (res += word2.slice(i));
};

const res = mergeAlternately("abc", "jkytfjfythjm");
console.log("res", res);
