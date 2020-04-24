const Mirror = (root) => {
  if (root === null) {
    return
  }
  const tmp = root.left
  root.left = root.right
  root.right = tmp
  Mirror(root.left)
  Mirror(root.right)
}