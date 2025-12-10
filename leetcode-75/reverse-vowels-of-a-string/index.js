/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = s.split("");
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    const isIVowel =
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u" ||
      arr[i] === "A" ||
      arr[i] === "E" ||
      arr[i] === "I" ||
      arr[i] === "O" ||
      arr[i] === "U";
    const isJVowel =
      arr[j] === "a" ||
      arr[j] === "e" ||
      arr[j] === "i" ||
      arr[j] === "o" ||
      arr[j] === "u" ||
      arr[j] === "A" ||
      arr[j] === "E" ||
      arr[j] === "I" ||
      arr[j] === "O" ||
      arr[j] === "U";

    if (isIVowel && isJVowel) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else if (isIVowel) {
      j--;
      continue;
    } else if (isJVowel) {
      i++;
      continue;
    }

    i++;
    j--;
  }
  return arr.join("");
};

console.log(reverseVowels("IceCreAm"));

/**
 * 345. Reverse Vowels of a String
Easy
Topics
premium lock icon
Companies
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 

 */
