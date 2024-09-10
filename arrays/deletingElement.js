var removeElement = function(nums, val) {
    let k = 0; // This will track the number of non-val elements
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k; // Number of non-val elements
};


nums = [3,2,2,3], val = 3

removeElement(nums, val)
console.log(nums)