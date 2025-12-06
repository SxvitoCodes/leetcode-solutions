// Difficulty: EASY
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// Solution Big O(m + n) Time O(1) Space.
// Execution time: 68 ms, faster than 99.36% of JavaScript online submissions for Merge Sorted Array.
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the last element of merged array

    // Start from the end and work backwards
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 has remaining elements, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

// Example usage:
nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6], n = 3

merge(nums1, m, nums2, n)
console.log(nums1)