// Worst case
// var findDisappearedNumbers = function(nums) {
//     let tempArr = Array.from({length: nums.length}, (_, i) => i + 1)

//     for (let i = 0; i < nums.length; i++) {
//         if(tempArr.includes(nums[i])){
//             let index = tempArr.indexOf(nums[i])
//             tempArr.splice(index, 1)
//         }
//     }

//     return tempArr
// };


// better solution (GPT solved it, I could not)
function findDisappearedNumbers(nums) {
    // Step 1: Mark indices based on the numbers
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1; // Get the index corresponding to the number
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // Mark as visited by negating
        }
    }

    // Step 2: Collect missing numbers
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // If positive, the number i+1 is missing
        }
    }

    return result;
}

nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums))