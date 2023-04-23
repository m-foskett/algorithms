// Using an Array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array Implementation has O(n)
const queue = [];
// Enqueue
queue.push('a');
queue.push('b');
queue.push('c');
console.log(queue)
// Dequeue
queue.shift()
console.log(queue)
// Using Linked Lists ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Linked List Implementation has O(1) (optimal)
class QueueNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new QueueNode(val)
        if(this.size === 0){
            this.front = newNode
            this.back = newNode
        } else {
            this.back.next = newNode;
            this.back = newNode
        }
        this.size++;
    }

    dequeue(val) {
        if(this.size === 0){
            return null;
        }
        const removedNode = this.front
        if(this.size === 1) {
            this.back = null;
        }
        this.front = this.front.next;
        this.size--;
        return removedNode.val;
    }
}

const myQueue = new Queue();
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.enqueue('x');
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());