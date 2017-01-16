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

  for (let i = 0; i < arr.length; i++) {
    currentMin = i;

    for (let j = i + 1; j < arr.length; j++) {
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
  let mergeArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i++]);
    } else {
      mergeArr.push(arr2[j++]);
    }
  }

  return mergeArr.concat(arr1.slice(i)).concat(arr2.slice(j));
}


function partition(arr, left, right) {
  let pivot = arr[left];
  let partitionIndex = left;

  for (let i = left + 1; i < right + 1; i++) {
    if (arr[i] < pivot) {
      partitionIndex++;
      const temp = arr[i];

      arr[i] = arr[partitionIndex];
      arr[partitionIndex] = temp;
    }
  }

  const temp = arr[partitionIndex];

  arr[partitionIndex] = pivot;
  arr[left] = temp;

  return partitionIndex;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let midNum = Math.floor(arr.length / 2);
  let arrLeft = mergeSort(arr.slice(0, midNum));
  let arrRight = mergeSort(arr.slice(midNum));

  return merge(arrLeft, arrRight);
}

function quickSort(arr) {
  if(arr.length === 0) {
    return [];
  }

  let arr1 = [];
  let arr2= [];
  let pivot = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  return quickSort(arr1).concat(pivot, quickSort(arr2));
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
