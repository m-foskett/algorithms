 class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
 }

 class LinkedList {
    // Head
    constructor() {
        this.head = null;
    }

    append(val) {
        // Edge Case
        if(this.head === null){
            this.head = new Node(val);
            return;
        }
        // Iterative Method ~~~~~~~~~~~~~~~~~~~~~~~
        // let currentLocation = this.head
        // // Keep looping until tail is reached
        // while(currentLocation.next !== null){
        //     currentLocation = currentLocation.next
        // }
        // currentLocation.next = new Node(val);
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Recursive Method ~~~~~~~~~~~~~~~~~~~~~~~
        this._append(val, this.head);
    }
    // Helper Function: _append(val, curr)
    _append(val, curr){
        // Base Case: Tail
        if(curr.next === null){
            curr.next = new Node(val);
            return;
        }
        // Recursive Case: Move to the next node to find tail
        this._append(val, curr.next);
    }

    print() {
        // Iterative Method ~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // let str = '';
        // let currentLocation = this.head;
        // // Accounts for empty list case, loops to tail
        // while(currentLocation !== null) {
        //     str += currentLocation.val + '->';
        //     currentLocation = currentLocation.next;
        // }
        // console.log(str)
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Recursive Method
        const output = this._print(this.head)
        console.log(output)
    }
    // Helper Function: _print(curr)
    _print(curr){
        // Empty Case/Tail Case Covered
        if(curr === null) return '';
        return curr.val + '->' + this._print(curr.next);
    }

    contains(target) {
        // Iterative Method ~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // let currentLocation = this.head;
        // // Accounts for empty list case, loops to tail
        // while(currentLocation !== null) {
        //     // Test before incrementing or tail will point at null value
        //     if(currentLocation.val === target){
        //         return true;
        //     }
        //     currentLocation = currentLocation.next;
        // }
        // return false;
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Recursive Method
        let curr = this.head
        return this._contains(target, curr)
    }

    _contains(target, curr){
        // Handles empty and tail case
        if(curr === null) return false;
        if(curr.val === target) return true;
        return this._contains(target, curr.next);
    }
 }

// Sum List values function ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const sumList = (head) => {
    // Iterative ~~~~~~~~~~~~~~~~~~~~~~
    // O(n) Time
    // O(1) Constant (No array creation, only fixed amount of variables)
    // let curr = head;
    // let sum = 0;
    // while(curr !== null){
    //     sum += curr.val // add val
    //     curr = curr.next // increment
    // }
    // return sum
    // Recursive ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // O(n) Time
    // O(n) Space - Linear (n stack frames on call stack)
    // Covers Empty case and tail case
    if (head === null) return 0;
    return head.val + sumList(head.next)
}
// console.log(sumList(list.head))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Delete Node Function
const deleteValue = (head, target) => {
    // Iterative Method ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Time: O(n) - linearly checking each node through looping
    // Space: O(1)
    // // If head value is the target
    // if(head.val === target){
    //     return head.next;
    // }
    // let prev = null;
    // let curr = head;

    // // Accounts for empty list and reaching tail
    // while (curr !== null) {
    //     if(curr.val === target){
    //         // Remove curr node
    //         prev.next = curr.next;
    //     }
    //     // Update
    //     prev = curr;
    //     curr = curr.next;
    // }
    // return head;
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Recursive Method ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Time: O(n) - linearly checking each node per recursion
    // Space: O(n) - n stack frames
    // If head value is the target
    if(head.val === target){
        return head.next;
    }
    _deleteValue(head, null, target);
    return head;
}
// Recursive Delete Helper Function
const _deleteValue = (curr, prev, target) => {
    // Check if at tail or empty list
    if(curr === null){
        return;
    }
    // If target found, delete
    if(curr.val === target){
        prev.next = curr.next;
        return;
    }
    _deleteValue(curr.next, curr, target)
};

// Reverse List Function
// const reverseList = (head) => {
    // Iterative ~~~~~~~~~~~~~~~~~~~~~~~~~
    // Time: O(n) - One loop therefore linear
    // Space: O(1) - no arrays, consant variables, const stack frames
    // let prev = null;
    // let curr = head;

    // while (curr !== null){
    //     const next = curr.next;
    //     curr.next = prev;

    //     prev = curr;
    //     curr = next;
    // }
    // return prev;
// }
 // Recursive ~~~~~~~~~~~~~~~~~~~~~~~~~
 // Time: O(n) - n recursive calls
// Space: O(n) - n stack frames
const reverseList = (curr, prev = null) => {
    // At tail
    if(curr === null){
        return prev;
    }
    let next = curr.next;
    curr.next = prev;
    return reverseList(next, curr);
};

// Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
const print = (head) => {
    // Empty Case/Tail Case Covered
    if(head === null) return '';
    console.log(head.val + '->')
    print(head.next);
}
print(list.head);
const newHead = reverseList(list.head)
print(newHead);