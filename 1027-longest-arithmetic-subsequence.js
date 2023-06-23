function longestArithSeqLength(nums) {
    const dp = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
      dp[i] = new Map();
    }
  
    let maxLen = 0;
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        const diff = nums[i] - nums[j];
        const len = (dp[j].get(diff) || 1) + 1;
        dp[i].set(diff, len);
        maxLen = Math.max(maxLen, len);
      }
    }
  
    return maxLen;
  }