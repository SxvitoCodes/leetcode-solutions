var validMountainArray = function(arr) {
    let i = 0;
    increaseCheck = false;
    decreaseCheck = true;

    while(arr[i] < arr[i+1]) {
        i++;
        (i+1 !== arr.length ) ? increaseCheck = true : increaseCheck = false;
    }

    for (let j = i; j < arr.length; j++) {
        if(arr[j] <= arr[j+1]) {
            decreaseCheck = false;
        }
    }

    if (increaseCheck && decreaseCheck) {
        return true;
    }

    return false;
};

arr = [0,1,2,3,4,5,6,7,8,9];
let check = validMountainArray(arr);

console.log(check)