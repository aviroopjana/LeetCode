/*
    Problem(Hard) : Given an unsorted integer array nums, return the smallest missing positive integer.

    You must implement an algorithm that runs in O(n) time and uses constant extra space.
*/

const firstMissingPositive = function(nums) {
    const positiveNums = new Set(nums);

    for(let i=1; i<= nums.length + 1; i++) {
        if(!positiveNums.has(i)) {
            return i;
        }
    }

    return nums.length + 1;
}