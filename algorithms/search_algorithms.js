'use strict'

const linearSearch = function(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

const binarySearch = function(array, value) {
  let low  = 0,
      high = array.length - 1,
      mid;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

  }
  return - 1;
}

module.exports = { linearSearch, binarySearch };
