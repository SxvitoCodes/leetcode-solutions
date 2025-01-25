// var replaceElements = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (i + 1 < arr.length) {
//             let maxValue = arr[i + 1]
//             for (let j = i + 1; j < arr.length; j++) {
//                 if(arr[j] > maxValue) {
//                     maxValue = arr[j]
//                 }
//             }
//             arr[i] = maxValue;
//         } else {
//             arr[i] = -1;
//         }
//     }

//     return arr
// };

// best version (chatGPT)
var replaceElements = function(arr) {
    let maxSoFar = -1;  // Initialize maxSoFar as -1 for the last element
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];  // Store the current element
        arr[i] = maxSoFar;     // Replace the current element with maxSoFar
        maxSoFar = Math.max(maxSoFar, current);  // Update maxSoFar
    }
    return arr;
};


const arr = [56903,18666,60499,57517,26961]
console.log(replaceElements(arr))