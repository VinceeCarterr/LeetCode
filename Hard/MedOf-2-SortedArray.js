/* 
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).

    Example 1:
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example 2:
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
    
    Constraints:
    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106
*/

  /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length, n = nums2.length;
    const halfLen = Math.floor((m + n + 1) / 2);
    let lo = 0, hi = m;
    
    while (lo <= hi) {
        const i = Math.floor((lo + hi) / 2);
        const j = halfLen - i;
        
        const Aleft  = (i === 0) ? -Infinity : nums1[i-1];
        const Aright = (i === m) ?  Infinity : nums1[i];
        const Bleft  = (j === 0) ? -Infinity : nums2[j-1];
        const Bright = (j === n) ?  Infinity : nums2[j];
        
        if (Aleft <= Bright && Bleft <= Aright) {
            if ((m + n) % 2 === 1) {
                return Math.max(Aleft, Bleft);
            } else {
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            }
        }
        else if (Aleft > Bright) {
            hi = i - 1;
        }
        else {
            lo = i + 1;
        }
    }
};

console.log(findMedianSortedArrays([1,3], [2,5,7,9,10]));
console.log(findMedianSortedArrays([1,2], [3,4]));