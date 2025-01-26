// worst case 
// var sortedSquares = function(nums) {
//     let squaredArray = []
//     for (let i = 0; i < nums.length; i++) {
//         squaredArray.push(nums[i] * nums[i])
//     }

//     squaredArray.sort((a, b) => a - b)

//     return squaredArray
// };

// GPT helped
var sortedSquares = function(nums) {
    let sortedSquares = new Array(nums.length)
    let left = 0
    let right = nums.length - 1
    let pos = nums.length - 1

    while(left <= right) {
        let leftSquare = nums[left] * nums[left]
        let rightSquare = nums[right] * nums[right]

        if(leftSquare < rightSquare) {
            sortedSquares[pos] = rightSquare
            right--
        } else {
            sortedSquares[pos] = leftSquare
            left++
        }
        pos--
    }

    return sortedSquares
};

nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))