const LinkedList = require('./LinkedList');

const SSL = new LinkedList();

// .2) Create a singly linked list

main = () => {
  SSL.insertLast('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  // SSL.remove("squirrel");
  SSL.insertBefore('Helo','Y');
  SSL.insertAfter('Starbuck', 'AfterThing');
  SSL.insertAt(3, 'Cat');
  SSL.remove('Tauhida');
};

function display(){
  console.log(JSON.stringify(SSL));
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

main();
size(SSL);
display();
isEmpty(SSL);