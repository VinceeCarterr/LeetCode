/***
    Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

    You may assume the array is the output of JSON.parse.

    

    Example 1:

    Input: nums = [null, {}, 3]
    Output: 3
    Explanation: Calling nums.last() should return the last element: 3.
    Example 2:

    Input: nums = []
    Output: -1
    Explanation: Because there are no elements, return -1.
    

    Constraints:

    arr is a valid JSON array
    0 <= arr.length <= 1000
***/

Array.prototype.last = function() {
  // If the array is empty, return -1
  if (this.length === 0) return -1;
  // Otherwise return the last element
  return this[this.length - 1];
};

// Examples:
const nums1 = [null, {}, 3];
console.log(nums1.last());

const nums2 = [5, 9, 11, 15];
console.log(nums2.last());
