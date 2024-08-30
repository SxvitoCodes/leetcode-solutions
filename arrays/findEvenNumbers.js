/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenNumbers = 0;
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        let counter = 0;
        
        while (number != 0) {
            number = Math.floor(number / 10);
            counter++;
        }

        if( counter % 2 == 0 ){ 
            evenNumbers++;
        }
    }

    return evenNumbers;
};

const nums = [12,345,2,6,7896];

console.log(findNumbers(nums))