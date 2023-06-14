/*
    Problem to solve the minimum absolute difference between the values of any two different nodes in the tree.
*/ 

class Treenode {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function getMinimumDistance(root) {
    let minDiff = Infinity;
    let prev = -Infinity;
    let firstNodeVisited = false

    function inOrderTraversal(node) {
        if (node === null) {
            return;
        }

        inOrderTraversal(node.left);

        if(!firstNodeVisited) {
            firstNodeVisited = true;
        } else {
            minDiff = Math.min(minDiff, node - prev.val);
        }

        prev = node.val;

        inOrderTraversal(node.right);
    };

    inOrderTraversal(root);

    return minDiff;

}