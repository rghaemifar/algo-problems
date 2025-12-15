/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 1;
  const len = nums.length;
  while (j < len) {
    if (nums[i]) {
      i++;
      j++;
      continue;
    } else if (!nums[i] && !nums[j]) {
      j++;
      continue;
    } else {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
      j++;
      continue;
    }
  }

  return nums;
};

console.log(
  moveZeroes([0, 0, 0, 0, 2, 3232, 43, 43, 0, 0, 0, 2, 0, 0, 3, 1, 0, 3, 12])
);

/** 
 *   optimal solution (not mine):

var moveZeroes = function(nums) {
    let insertPos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};
*/

/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
 

 */
