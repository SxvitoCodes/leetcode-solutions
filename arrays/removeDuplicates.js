var removeDuplicates = function(nums) {
    if (nums.length > 0) {
        
        let k = 0;

        for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== nums[i + 1]) {
                nums[k] = nums[i];
                k++;
            }
        }
        
        return k;
    }
};

nums = [1]
k = removeDuplicates(nums)

console.log(nums, k);