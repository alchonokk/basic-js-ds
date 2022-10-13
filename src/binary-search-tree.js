const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootOfTree = null;
  }

  root() {
    return this.rootOfTree;
  }

  add(data) {
    this.rootOfTree= addData(this.rootOfTree, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootOfTree, data);

    function searchWithin(node, data) {
      if (!node) return false;

      if (node.data === data) return true

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }

  }

  find(data) {
    return searchWithin(this.rootOfTree, data);

    function searchWithin(node, data) {
      if (!node) return null;
      if (data === node.data) return node;

      return data < node.data
        ? searchWithin(node.left, data)
        : searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.rootOfTree = removeNode(this.rootOfTree, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) return null;
  

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootOfTree) {
      return;
    }

    let node = this.rootOfTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootOfTree) {
      return;
    }

    let node = this.rootOfTree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
    
  }
}

module.exports = {
  BinarySearchTree
};