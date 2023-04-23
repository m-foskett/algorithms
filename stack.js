// Using an Array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const myStack = [];
// myStack.push('a')
// myStack.push('b')
// console.log(myStack)
// myStack.pop();
// console.log(myStack)
// myStack.push('c')
// myStack.push('d')
// console.log(myStack)
// Maximally Efficient Stack has O(1) Time Complexity for push/pop
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Using a Linked List
// Maximally Efficient Stack has O(1) Time Complexity for push/pop
// Space Complexity: O(n) for each node
class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val){
        if (this.size === 0){
            this.top = new StackNode(val);
        } else {
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        this.size++
    }

    getTop(){
        return this.top.val;
    }

    pop(){
        if (this.size === 0) return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.val;
    }
}

const myStack = new Stack();
myStack.push('a')
myStack.push('b')
myStack.push('c')
console.log(myStack.size)
console.log(myStack.getTop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.size)
