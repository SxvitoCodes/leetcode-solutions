var moveZeroes = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            k++;
        }
    }
};

nums = [1,2]
console.log(moveZeroes(nums));