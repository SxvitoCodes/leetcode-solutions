const heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]

const heightChecker = (heights) => {
    let sortedHeights = heights.toSorted((a, b) => a - b)
    console.log(sortedHeights)
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if(heights[i] !== sortedHeights[i]) {
            count++;
        }
    }

    return count;
};

const indices = heightChecker(heights);
console.log(indices)