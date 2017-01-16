// Write a function named insertInBack that takes in the following:
//   value (a number)
//   list (a linked list)
// The function returns the linked list with the node inserted at the end.
// Example:
//    insertInBack(1 -> 2 -> 3 -> ., 4) produces 1 -> 2 -> 3 -> 4 -> .
function insertInBack(value, list) {
  if(list === null) {
    return {
      value,
      next: null
    }
  }

  return {
    value: list.value,
    next: insertInBack(value, list.next)
  }
}

// Write a function named removeNodeAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the linked list with the node at that index removed.
// Example:
//  removeNodeAtIndex(1 -> 2 -> 3 -> ., 1) produces 1 -> 3 -> .
function removeNodeAtIndex(list, index) {
  // if(list === null) {
  //   return list;
  // }
  let count = 0;
  let previous = null;
  let current = list;

  while(current !== null) {
    if(count === index) {
      previous.next = current.next;
    } else {
      previous = current;
    }
    current = current.next;
    count ++;
  }

  return list;
}

// Write a function named reverse that takes in the following:
//   list (a linked list)
// The function returns a NEW linked list with the items in reverse order.
// Example:
//   1 -> 2 -> 3 -> . would produce 3 -> 2 -> 1 -> .
function reverse(list) {
  let reversedList = null;

  while(list) {
    reversedList = {
      value: list.value,
      next: reversedList
    }

    list = list.next;
  }

  return reversedList;
}

module.exports = {
  insertInBack,
  removeNodeAtIndex,
  reverse
};
