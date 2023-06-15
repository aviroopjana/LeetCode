class Tree {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const searchInBST = function (root,val) {
    if(root === null || root.val === val) {
        return root;
    }

    if(root.val < val) {
        return searchInBST(root.right,val);
    } else {
        return searchInBST(root.left,val);
    }
};