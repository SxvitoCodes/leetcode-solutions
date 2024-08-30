/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0;
    let ones = 0;

    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i] == 1) {
            ones++;
            if(ones > maxOnes) {
                maxOnes = ones;
            }
        } else {
            ones = 0;
        }
    }
    return maxOnes;
};

number = [1,1,0,1]

console.log(findMaxConsecutiveOnes(number))