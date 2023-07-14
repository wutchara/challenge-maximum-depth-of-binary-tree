/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const node1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log('node1', node1);
console.log('maxDepth', maxDepth(node1));

// const node2 = new TreeNode(1, null, new TreeNode(2));
// console.log('node2', node2);
// console.log('maxDepth', maxDepth(node2));