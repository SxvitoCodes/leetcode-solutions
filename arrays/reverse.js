var reverse = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const first = nums.shift(i);
        nums.push(first);
    }
    return nums;
}

const nums = [1, 3, 2, 5];
console.log(reverse(nums))