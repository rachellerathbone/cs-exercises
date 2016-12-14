'use strict'

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let done = false;

  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        swap(arr, i, i -1);
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  let currentMin;

  for (var i = 0; i < arr.length; i++) {
    currentMin = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMin]) {
        currentMin = j
      }
    }

    if (i !== currentMin) {
      swap(arr, i, currentMin);
    }
  }

  return arr;
}

function insertionSort(arr) {
  let temp;

  for(let i = 0; i < arr.length; i++) {
    temp = i;

    for(let j = i; j < arr.length; j++) {
      while(arr[temp] > arr[j]) {
        temp = j;
      }
    }

    if (i !== temp) {
      swap(arr, i, temp);
    }
  }

  return arr;
}

function merge(arr1, arr2) {

}

function partition(arr, left, right) {

}

function mergeSort(arr) {

}

function quickSort(arr) {

}

module.exports = {
  swap,
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  partition,
  mergeSort,
  quickSort
};
