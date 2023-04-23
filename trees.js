class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
//      a
//     /\
//    b  c
//   /\   \
//  d  e   f
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// Time Complexity: O(n)
// Space Complexity: O(n)
const breadthFirstPrint = (root) => {
    const queue = [ root ];
    while(queue.length > 0){
        const curr = queue.shift();
        console.log(curr.val);
        if(curr.left !== null) queue.push(curr.left)
        if(curr.right !== null) queue.push(curr.right)
    }
};
// breadthFirstPrint(a)
// Write a fn bfs(root, target) taking a root of binary tree and target
// value as args
// Fn should return a boolean indicating whether or not tree contains target
const bfs = (root, target) => {
    const queue = [ root ];
    while(queue.length > 0){
        const curr = queue.shift();
        if(curr.val === target) return true;
        if(curr.left !== null) queue.push(curr.left)
        if(curr.right !== null) queue.push(curr.right)
    }
    return false;
}

// console.log(bfs(a, 'e'));
// console.log(bfs(a, 'z'));
// Write a fn sumTree(root) taking a root of binary tree as arg
// Fn should return total sum of all vals, only contains nums
// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(5);
// //      3
// //     /\
// //    2  7
// //   /\   \
// //  4  -2   5
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

const sumTree = (root) => {
    const queue = [ root ];
    let sum = 0;
    while(queue.length > 0){
        const curr = queue.shift();
        sum += curr.val;
        if(curr.left !== null) queue.push(curr.left)
        if(curr.right !== null) queue.push(curr.right)
    }
    return sum;
}

// console.log(sumTree(a));
// Depth First ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// //      a
// //     /\
// //    b  c
// //   /\   \
// //  d  e   f
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// Iterative ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// O(n) Time Complexity, O(n) Space Complexity
const depthFirstPrint = (root) => {
    const stack = [root];
    while(stack.length > 0){
        const curr = stack.pop();
        console.log(curr.val);
        if(curr.right !== null) stack.push(curr.right)
        if(curr.left !== null) stack.push(curr.left)
    }
}
// depthFirstPrint(a);
// Recursive: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// O(n) Time Complexity, O(n) Space Complexity
const depthFirstPrintRecursive = (root) => {
    // Base Case: Empty Tree
    if (root === null) return;
    console.log(root.val);
    depthFirstPrintRecursive(root.left)
    depthFirstPrintRecursive(root.right)
}
// depthFirstPrint(a);

// Types of Depth First Traversal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Pre-Order: self, left, right
const preOrder = (root) => {
    // Base Case: Empty Tree
    if (root === null) return;
    // Print parent BEFORE traversal
    console.log(root.val);
    preOrder(root.left)
    preOrder(root.right)
}
// preOrder(a);
// Post-Order: left, right, self
const postOrder = (root) => {
    // Base Case: Empty Tree
    if (root === null) return;
    // Print parent AFTER traversal
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val);
}
// postOrder(a);
// In-Order: left, self, right
const inOrder = (root) => {
    // Base Case: Empty Tree
    if (root === null) return;
    // Print parent BETWEEN traversal
    inOrder(root.left)
    console.log(root.val);
    inOrder(root.right)
}
// inOrder(a);
// Write a fn sumTree(root) taking a root of binary tree as arg
// Fn should return total sum of all vals, only contains nums
const sumTreeDepth = (root) => {
    // Base Case: Empty Tree
    if (root === null) return 0;
    return root.val + sumTreeDepth(root.left) + sumTreeDepth(root.right);
}
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);
//      3
//     /\
//    2  7
//   /\   \
//  4  -2   5
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(sumTreeDepth(a));