class _Node {
  constructor(value, next) {
    this.value = value,
    this.next = next;
  }
}


// Linked list class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert a node a the beginning of the list
  insertFirst(item) {
    // create a new node then...
    //assign the head to the address of the new node
    this.head = new _Node(item, this.head);
  }

  // 
  insertLast(item) {

    //check if list is empty, if it is insert new item at 
    //  the start of the list
    if (this.head === null) {
      this.insertFirst(item);
    }

    //if its not empty cycle traverse through the list until 
    // we get to null, when we get to end of list, set next to 
    // new node.
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }

  }

  // to retrieve a node, you start at the beginning and 
  // move thru the list until that node is found
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    console.log('Found', item);
    return currNode;
  }

  // in order to delete a node, manipulate the pointers
  // and node to be removed is automatically garbage collected
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      // reassign the ponter value to the next node in the list
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, newItem) {

    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    // If we arent at the end and we havent found our value, go to the next node
    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;

      // point the the current node at the next node
      currNode = currNode.next;
    }

    //if we have found the item we are lookign for, create new node at current node position
    if(currNode.value === item){
      let newNode = new _Node(newItem, currNode);

      //point newNode at "current" node position
      newNode.next = currNode;

      // point previous node at new Node
      previousNode.next = newNode;
    }
    if (currNode === null) {
      // this.head = new _Node()
      console.log('Called insertBefore(), but item not found');
      return;
    }

  }
  insertAfter(item, newItem) {
    let currNode = this.head;
    let previousNode = this.head;

    while (previousNode !== null && previousNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (previousNode.value === item) {
      let newNode = new _Node(newItem, currNode);
      previousNode.next = newNode;
    }

    if (currNode === null) {
      console.log('Called insertArter(), but item not found');
      return;
    }
  }

  insertAt(position, item) {
    let currNode = this.head;
    let previousNode = this.head;
    let index = 0;

    while (currNode !== null && index !== position) {
      previousNode = currNode;
      currNode = currNode.next;
      index++;
    }

    if (index === position) {
      let newNode = new _Node(item, currNode);
      previousNode.next = newNode;
    }

    if (currNode === null) {
      console.log('Called insertAt(), but item not found');
      return;
    }

  }



}

module.exports = LinkedList;