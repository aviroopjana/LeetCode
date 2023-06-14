/*
    Problem: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

const missingNumber = function(nums) {
    const HashSet = new Set(nums);

    if(!HashSet.has(0)) {
        return 0;
    }

    for(let i=0; i<=nums.length + 1; i++) {
        if(!HashSet.has(i)) {
            return i;
        }
    }

    return nums.length + 1;
}