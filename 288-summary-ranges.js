var summaryRanges = function(nums) {
    let missingRanges = [];
    let startRange = nums[0];

    //Base Case
    if (nums.length === 0) {
        return missingRanges;
    }

    for(let i=0; i<nums.length; i++) {
        const diff = nums[i+1] - nums[i];
        if (diff > 1) {
            endRange = nums[i];
            if (startRange === endRange) {
                missingRanges.push(startRange.toString());
            }
            else {
                missingRanges.push(`${startRange}->${endRange}`);
            }
            startRange = nums[i+1];
        }                
    }
    
    if(startRange === nums[nums.length - 1]) {
        missingRanges.push(startRange.toString());
    } else {
        missingRanges.push(`${startRange}->${nums[nums.length - 1]}`);
    }

    return missingRanges;
};