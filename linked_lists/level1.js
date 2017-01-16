// Write a function named count that takes in one argument:
//  list - a Linked List

// recursive version -> looks cleaner
function count(list) {
  if(list === null) {
    return 0;
  } else {
    return 1 + count(list.next);
  }
}


// The function returns the number of elements in the list.
// iterative version -> faster and takes less space
// function count(list) {
//   let len = 0;
//
//   while(list !== null) {
//     len += 1;
//     list = list.next;
//   }
//
//   return len;
// }

// Write a function named insertInFront that takes in one argument:
//   value (a number)
//   list  (a linked list)
// The function returns the same linked list with the value inserted in front.
// Example:
//    insertInFront(1 -> 2 -> 3 -> ., 4) produces 4 -> 1 -> 2 -> 3 -> .
function insertInFront(value, list) {
  if (list === null) {
    return {
      value,
      next: null
    }
  }
    return {
      value,
      next: list
    }

  return list;
}

// Write a function named sum that takes in one argument:
//  list - a Linked List
// The function returns the sum of all of the elements in the list.
function sum(list) {
  let sum = 0;

  while (list !== null) {
    sum += list.value;
    list = list.next;
  }

  return sum;
}



// Write a function named getValueAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the value of the item at the index. If an invalid index
// is used, it will throw an error.
// Example:
//  getValueAtIndex(1 -> 2 -> 3 -> ., 2) produces 3
//  getValueAtIndex(1 -> 2 -> 3 -> ., 0) produces 1
//  getValueAtIndex(1 -> 2 -> 3 -> ., 4) throws an error
function getValueAtIndex(list, index) {
  let value = 0;

  while(list !== null) {
    if(value === index) {
      return list.value;
    }
    value++
    list = list.next;
  }

  throw new Error;
}

// Write a function toArray that takes in one argument:
//   list (a linked list)
// The function returns an array of the values in the linked list.
// Example:
//   1 -> 2 -> 3 -> .  would produce [1, 2, 3]
function toArray(list) {
  if(list === null) {
    return [];
  }

  const arr = [];

  while(list !== null) {
    arr.push(list.value);
    list = list.next;
  }

  return arr;
}

module.exports = {
  count,
  insertInFront,
  sum,
  getValueAtIndex,
  toArray
};
