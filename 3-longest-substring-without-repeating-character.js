var lengthOfLongestSubstring = function(s) {
    const countMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (countMap.has(char)) {
            start = Math.max(start, countMap.get(char) + 1);
        }
        
        countMap.set(char, i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};