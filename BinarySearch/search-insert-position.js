// Search Insert Position (Easy)
// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Solution: Binary Search 
// Time Complexity: O(log n)
// Space Complexity: O(1)
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length-1 
    while (left <= right) {
        // Find the middle index, rounded down
        let middle = Math.floor((left+right)/2)
        if (nums[middle] > target) {
            right = middle - 1
        } else if(nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }

    // If not found, left is the insertion position
    return left
};

// Example Usage:
nums = [1,2,3,5,6,7,8,9], target = 5
console.log(searchInsert(nums, target));