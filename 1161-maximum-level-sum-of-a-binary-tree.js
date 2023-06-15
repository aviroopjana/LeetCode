var maxLevelSum = function(root) {
    if (root === null) {
        return 0;
    }

    let maxSum = -Infinity;
    let maxLevel = 1;

    const queue = [{ node: root, level: 1 }];

    while (queue.length > 0) {
        const { level } = queue[0];
        const levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const { node } = queue.shift();
            levelSum += node.val;

            if (node.left !== null) {
                queue.push({ node: node.left, level: level + 1 });
            }
            if (node.right !== null) {
                queue.push({ node: node.right, level: level + 1 });
            }
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = level;
        }
    }

    return maxLevel;
};
