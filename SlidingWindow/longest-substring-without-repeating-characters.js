// Given a string s, find the length of the longest Substring without duplicate characters.

// Solution Big O(n) Time O(min(m,n)) Space where m is the size of the charset.
var lengthOfLongestSubstring = function(s) {
    let set = new Set() // to store unique characters
    let p1 = 0 // left pointer
    let maxLen = 0; // max length found

    // Slide the right pointer through the string
    for (let p2 = 0; p2 < s.length; p2++) {
        while (set.has(s[p2])){ // if duplicate found
            set.delete(s[p1]) // remove char at left pointer
            p1++
        }

        // Add the current character to the set
        set.add(s[p2])
        maxLen = Math.max(maxLen, p2-p1+1)
    }

    return maxLen
};

// Example usage:
s = "abcabcbb"
length = lengthOfLongestSubstring(s)
console.log(length)