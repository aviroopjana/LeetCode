/*
    Problem: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

function singleNumber(nums) {
    let CountMap = Map();

    for(let i=0; i< nums.length; i++) {
        if(CountMap.has(nums[i])) {
            CountMap.set(nums[i],CountMap.get(nums[i])+1);
        } else {
            CountMap.set(nums[i],1);
        }
    }

    for(const [element,frequency] of CountMap.entries()) {
        if(frequency === 1) {
            return element;
        }
    }
}