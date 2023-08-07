function LinkedList() {
  let listLength = 0;
  let HEAD = null;

  // private function
  function Node(value = null, next = null) {
    return { value, next };
  }

  function append(value) {
    let node = Node(value);
    // if there is no head this will be the head
    if (HEAD === null) {
      listLength++;
      HEAD = node;
    } else {
      let currentLoop = HEAD;
      // keep changing the current loop to next until you get to the last element
      while (currentLoop.next) {
        currentLoop = currentLoop.next;
      }
      currentLoop.next = node;
      listLength++;
      return HEAD;
    }
  }
  function prepend(value) {
    let node = Node(value);
    let headNextNode;
    // get current head.next and change it to the new node/head
    if (HEAD !== null) {
      headNextNode = HEAD.next;
      HEAD = node;
      HEAD.next = headNextNode;
    } else {
      HEAD = node;
    }
  }
  function size() {
    return listLength;
  }
  function head() {
    return HEAD;
  }
  function tail() {
    // go to the last elemment in the linked list and return
    let currentLoop = HEAD;
    while (currentLoop.next) {
      currentLoop = currentLoop.next;
    }
    return currentLoop;
  }
  function at(index) {
    let currentLoop = HEAD;
    for (let i = 1; i <= index; i++) {
      currentLoop = currentLoop?.next || null;
    }
    return currentLoop;
  }
  function pop() {
    // go to the second to the last element, change it to null and reduce listLength
    let currentLoop = HEAD;
    for (let i = listLength; i > 2; i--) {
      currentLoop = currentLoop.next;
    }
    currentLoop.next = null;
    listLength--;
    return HEAD;
  }
  function contains(value) {
    let currentLoop = HEAD;
    let status = false;
    for (let i = listLength; i > 0; i--) {
      if (currentLoop.value === value) return true;
      currentLoop = currentLoop.next;
    }
    return status;
  }
  function find(value) {
    let index = null;
    let currentLoop = HEAD;
    for (let i = 0; i <= listLength; i++) {
      if (currentLoop?.value === value) {
        index = i;
      }
      currentLoop = currentLoop?.next;
    }
    return index;
  }
  function toString() {
    let currentLoop = HEAD;
    let linkedListString = "";
    for (let i = 0; i <= listLength; i++) {
      const string = `(${currentLoop?.value ?? "null"}) -> `;
      linkedListString += string;
      currentLoop = currentLoop?.next;
    }
    // ( value ) -> ( value ) -> ( value ) -> null
    return linkedListString.slice(0, -3);
  }
  return {
    append,
    prepend,
    size,
    head,
    tail,
    pop,
    contains,
    find,
    at,
    toString,
  };
}

const node1 = LinkedList();
node1.append(2);
node1.append(3);
node1.append(10);
node1.prepend(5);
console.log(node1.size());
console.log(node1.head());
console.log(node1.tail());
console.log(node1.pop());
console.log(node1.contains(3));
console.log(node1.contains(2));
console.log(node1.contains(10));
console.log(node1.contains(5));
console.log(node1.find(2));
console.log(node1.find(5));
console.log(node1.find(3));
console.log(node1.at(1));
console.log(node1.at(0));
console.log(node1.at(2));
console.log(node1.at(3));
console.log(node1.toString());
console.log(node1.append(6));
console.log(node1.append(7));
console.log(node1.toString());

// [1, next] -> [2, next] -> [3, null]
