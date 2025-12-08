// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. Let these two numbers be 
// numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Solution Big O(n) Time O(1) Space.
var twoSum = function(numbers, target) {
    let p1 = 0; // Start pointer
    let p2 = numbers.length - 1; // End pointer

    while (p1 < p2) { // loop until pointers meet
        sum = numbers[p1] + numbers[p2] // calculate sum of values at pointers
        if (sum == target) {    // check if sum matches target
            return [p1 + 1, p2 + 1] // return 1-indexed positions
        } else if(sum > target) { // if sum is too large, move end pointer left
            p2--
        } else if(sum < target) { // if sum is too small, move start pointer right
            p1++
        }
    }
};

// Example usage:
numbers = [2,7,11,15], target = 9
result = twoSum(numbers, target)
console.log(result)