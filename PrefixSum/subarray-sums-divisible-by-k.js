// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.

// Solution Big O(n) Time O(k) Space
var subarraysDivByK = function(nums, k) {
    let count = 0;
    let prefixSum = 0;
    
    let remainderCount = new Map(); // Map to store frequency of prefix sum remainders
    remainderCount.set(0, 1); // There's one way to have a sum of 0 (empty subarray)

    for (let num of nums) {
        prefixSum += num;
        let remainder = prefixSum % k; // Get the remainder of the current prefix sum

        // Handle negative remainders to ensure they are within [0, k-1]
        if (remainder < 0) {
            remainder += k;
        }

        // If this remainder has been seen before, it means there are subarrays ending at the current index
        // whose sum is divisible by k
        if (remainderCount.has(remainder)) {
            count += remainderCount.get(remainder);
        }

        // Update the frequency of this remainder
        remainderCount.set(
            remainder,
            (remainderCount.get(remainder) || 0) + 1
        );
    }

    return count;
};

// Example usage:
nums = [4,5,0,-2,-3,1], k = 5
console.log(subarraysDivByK(nums, k));
