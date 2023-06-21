var getAverages = function(nums, k) {
    const n = nums.length;
    const avgs = new Array(n).fill(-1);

    const prefixSums = new Array(n + 1).fill(BigInt(0));
    for (let i = 1; i <= n; i++) {
        prefixSums[i] = prefixSums[i - 1] + BigInt(nums[i - 1]);
    }

    for (let i = 0; i < n; i++) {
        const left = Math.max(0, i - k);
        const right = Math.min(n - 1, i + k);

        const sum = prefixSums[right + 1] - prefixSums[left];
        const count = right - left + 1;

        if (count === 2 * k + 1) {
        avgs[i] = Number(sum / BigInt(count));
        }
    }

    return avgs;
};