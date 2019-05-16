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
  console.log(JSON.stringify(SSL));
};

main();