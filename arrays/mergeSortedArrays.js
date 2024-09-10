var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the last element of merged array

    // Start from the end and work backwards
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 has remaining elements, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6], n = 3

merge(nums1, m, nums2, n)

console.log(nums1)