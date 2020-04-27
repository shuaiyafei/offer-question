// 当前高度等于左右子树最大高度+1
const TreeDepth = (pRoot) => {
  if (pRoot == null) return 0
  return Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
}