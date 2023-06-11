var majorityElement = function(nums) {
    const countMap = new Map();
    const threshold = nums.length/2;

    if(nums.length == 1) {
        return nums[0];
    }

    for(let i=0; i<nums.length; i++) {
        const element = nums[i];
        if(countMap.has(element)) {
            countMap.set(element, countMap.get(element)+1);
            if(countMap.get(element) > threshold) {
                return element;
            }
        }
        else {
            countMap.set(element,1);
        }   
    }
};