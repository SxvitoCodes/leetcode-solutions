var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(i > 0) {
            for (let j = 0; j < i; j++) {
                if(arr[i]/2 === arr[j] || arr[i]*2 === arr[j]) {
                    return true;
                }
            }
        }
    }
    return false;
};

arr = [10,2,5,3]
let check = checkIfExist(arr)

console.log(check);
