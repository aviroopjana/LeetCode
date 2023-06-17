var containsDuplicate = function(nums) {
    const count = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (count.has(nums[i])) {
            count.set(nums[i], count.get(nums[i]) + 1);
        } else {
            count.set(nums[i], 1);
        }
    }

    for (let countValue of count.values()) {
        if (countValue > 1) {
            return true;
        }
    }

    return false;
};