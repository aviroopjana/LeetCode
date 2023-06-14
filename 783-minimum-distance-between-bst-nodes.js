/*
    Problem to solve the minimum difference between the values of any two different nodes in the tree.
*/

class Treenode {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const minDiffinBST = function(node) {
    let minDiff = Infinity;
    let prev = -Infinity;
    let firstNodeVisited = false;

    function inOrder(node) {
        if(node === null) {
            return;
        }

        inOrder(left.node);

        if(!firstNodeVisited) {
            firstNodeVisited = true;
        } else {
            minDiff = Math.min(minDiff, node.val - prev)
        };

        prev = node.val;

        inOrder(node.right);
    }

    inOrder(root);

    return minDiff;
}