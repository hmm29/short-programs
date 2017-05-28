/****************************************************************
 * BST Implementation:                                          *
 *                                                              *
 * Methods:                                                     *
 * insert - insert a node with key into the tree                *
 * getNodeByKey - search a node by key                          *
 * findInorderPredecessor - find key that precedes a node in    *
 * inorder traversal                                            *
 * findInorderSuccessor - find key that succeeds a node in      *
 * inorder traversal                                            *
 ****************************************************************/

// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
    this.root = null;
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {

    var root = this.root;

    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert it
    var currentNode = root;
    var newNode = new Node(key);

    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function(key) {
    var currentNode = this.root;

    while(currentNode) {
        if(key === currentNode.key) {
            return currentNode;
        }

        if(key < currentNode.key) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }

    return null;
}

BinarySearchTree.findInorderPredecessor = function(inputNode) {
  if(inputNode === null) {
    return null;
  }

  let res = null;
  let root = this.root;

  while(root) {
       if(inputNode.key > root.key) {
         res = root.key;
         root = root.right;
       } else {
         root = root.left;
       }
  }

  return res;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  	if(inputNode === null) {
      return null;
    }

  	let res = null;
  	let root = this.root;

  	while(root) {
         if(inputNode.key < root.key) {
           res = root.key;
           root = root.left;
         } else {
           root = root.right;
         }
   	}

  	return res;
}

/*********************************************
 * Driver program to test above functions    *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(9);

// Find the in order successor of test
var succ = node ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if(succ) {
    console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
    console.log("Inorder successor does not exist");
}

// prints "Inorder successor of 9 is 11"
