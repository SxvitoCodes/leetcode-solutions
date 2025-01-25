// worst case O(3n): 
// var thirdMax = function(nums) {
//     if (nums.length) {
//         let max = nums[0];
//         for (let i = 1; i < nums.length; i++) {
//             if(nums[i] > max) {
//                 max = nums[i];
//                 nums[i] = 0;
//             }
//         }
//         let secondMax = 0;
//         for (let i = 1; i < nums.length; i++) {
//             if(nums[i] > secondMax && nums[i] != max) {
//                 secondMax = nums[i];
//             } 
//         }
//         let thirdMax = 0;
//         for (let i = 1; i < nums.length; i++) {
//             if(nums[i] > thirdMax && nums[i] != secondMax && nums[i] != max) {
//                 thirdMax = nums[i];
//             } 
//         }
//         return thirdMax;
//     }
// };

var thirdMax = function(nums) {
    if (!nums.length){
        return
    }
    if (nums.length < 3) {
        return Math.max(...nums)
    }
    if (nums.length >= 3) {
        let max = -Infinity, secondMax = -Infinity, thirdMax = -Infinity;
        for (let num of nums) {
            if (num == max || num == secondMax || num == thirdMax) {
                continue
            }

            if (num > max) {
                thirdMax = secondMax;
                secondMax = max;
                max = num;
            } else if (num > secondMax) {
                thirdMax = secondMax;
                secondMax = num;
            } else if (num > thirdMax) {
                thirdMax = num;
            }
        }
        return thirdMax == -Infinity ? max : thirdMax;
    }
};

nums = [5, 1, 7, 6]
console.log(thirdMax(nums)); // 1