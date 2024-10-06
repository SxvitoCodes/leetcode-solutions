var sortArrayByParity = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2 === 0) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            k++;
        }
    }
    return nums;
};

nums = [3,1,2,4]
console.log(sortArrayByParity(nums)); // [2,4,3,1]