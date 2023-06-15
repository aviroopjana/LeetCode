var insertIntoBST = function(root, val) {

    if (!root) {
        return { val: val, left: null, right: null };
    }

    if(val < root.val) {
        root.left = insertIntoBST(root.left,val);
    } else {
        root.right = insertIntoBST(root.right,val);
    }

    return root;
};