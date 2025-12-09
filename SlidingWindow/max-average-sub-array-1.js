// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average 
// value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Solution Big O(n) Time O(1) Space.
var findMaxAverage = function(nums, k) {
    let window = 0 // current window sum
    let maxSum = 0 // max sum found

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        window += nums[i]
        maxSum = window
    }

    // Slide the window from start to end of the array
    for (let i = k; i < nums.length; i++) {
        window -= nums[i-k]
        window += nums[i]
        maxSum = Math.max(window, maxSum)
    }

    // Return the maximum average
    return maxSum / k
};

// Example usage:
nums = [1,12,-5,-6,50,3], k = 4
maxAverage = findMaxAverage(nums,k)
console.log(maxAverage)