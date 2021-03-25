const createThree = () => ({ root: null });

const createNode = (value = null) => ({ value, left: null, right: null });

const insertNode = (node, value) => {
  if (node === null) return createNode(value);

  const newNode = createNode();
  newNode.value = value;

  if (value < node.value) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, value);
    }
  } else if (value > node.value) {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, value);
    }
  }

  return node;
};

const calculateHeight = (root) => {
  if (root == null) return 0;

  if (calculateHeight(root.left) >= calculateHeight(root.right)) {
    return calculateHeight(root.left) + 1;
  } else {
    return calculateHeight(root.right) + 1;
  }
};

const three = createThree();

[20, 18, 22, 50, 45, 5, 21, 12, 33].forEach((el) => {
  three.root = insertNode(three.root, el);
});
