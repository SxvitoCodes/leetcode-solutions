/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let ones = 1;
    let consecutiveOnes = 0;

    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i] == 1 && nums[i + 1] == 1) {
            ones++;
            consecutiveOnes = ones;
            if(consecutiveOnes > maxOnes) {
                maxOnes = consecutiveOnes;
            }
        } else {
            ones = 1;
        }
    }
    return maxOnes;
};

number = [1, 1, 0, 1, 1, 1, 0, 1]

console.log(findMaxConsecutiveOnes(number))