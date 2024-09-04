/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squaredArray = [];
    for (let i = 0; i < nums.length; i++) {
        const squaredNum = Math.pow(nums[i], 2);
        squaredArray.push(squaredNum);
    }

    squaredArray.sort((a, b) => a - b);

    return squaredArray;
};