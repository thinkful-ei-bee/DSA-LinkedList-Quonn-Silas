const { LinkedList, SinglyLinkedList }  = require('./LinkedList');
const SSL = new LinkedList();
const SLL = new SinglyLinkedList();

// .2) Create a singly linked list

main = () => {
    SSL.insertLast('Apollo');
    SSL.insertLast('Boomer');
    SSL.insertLast('Helo');
    SSL.insertLast('Husker');
    SSL.insertLast('Starbuck');
    SSL.insertLast('Tauhida');
    // SSL.remove("squirrel");
    SSL.insertBefore('Helo', 'Y');
    SSL.insertAfter('Starbuck', 'AfterThing');
    SSL.insertAt(3, 'Cat');
    SSL.remove('Tauhida');
};

single_main = () => {
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    // SSL.remove("squirrel");
    SLL.insertBefore('Helo', 'Y');
    SLL.insertAfter('Starbuck', 'AfterThing');
    SLL.insertAt(3, 'Cat');
    SLL.remove('Tauhida');
};


//.3) Supplemental functions for a linked list

function display() {
    //   console.log(JSON.stringify(SSL));
    let current = SSL.head;
    let index = 1;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
        index++;
    }
}

function size(SSL) {
    let current = SSL.head;
    let index = 1;

    while (current !== null) {
        current = current.next;
        index++;
    }

    console.log(index);
    return index;
}

function isEmpty(SSL) {
    if (SSL.head === null) {
        console.log('List is empty');
        return true;
    }

    console.log('List is not empty');
    return false;
}

function findPrevious(SSL, item) {
    let current = SSL.head;
    let previous = SSL.head;
    while (current !== null && current.value !== item) {
        previous = current;
        current = current.next;
    }
    console.log(previous)
}

function findLast(SSL) {
    let current = SSL.head;
    while (current.next !== null) {
        previous = current;
        current = current.next;
    }
    console.log(current.value);
}
// main();
// single_main();
// size(SSL);
//display();
// isEmpty(SSL);
// findPrevious(SSL, "Helo");
//findLast(SSL);

// .4) Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {           
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }  
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//Our explaination is =>
//The function sets current to the starting position of the list, then checks to see that we are not at the end of the list
//If not, create new node at current pos, then checks to see if we are at the next to last position of the list,
//If so, if next value of newNode is set to the value of the node two spots ahead,
//If not, newNode is set equal to next node's value
//When reach the second to last position, current is set to the last position
//Simply Put => the list is forwarding a value from the head to the tail of the list
//next value to be the value after that

// Complexity = O(n^2) or quadrtaic

//.5) Reverse a list

function reverseList(SLL) {

    let current = SLL.head;
    let temp1;
    let previous;
    console.log(current)

    while(current.next !== null){
        temp1 = current.next;//next pointer
        previous = current;//
        current = temp1;//advances the node position by 1
        current.next = previous;//change
    }

    display();
    
}

reverseList(SLL);