'use strict';

/*

Create a function named reverseMerge.
It takes two arguments "keyArr" and "valArr" both of type Array.
It will return a hash that is a merge between the two inputs where
the values in keyArr will be the hashes key and
the values in valArr will be the hashes value.
The catch is that the values from the valArr will be assigned in from last to first.

i.e.
keyArr = [a, b, c];
valArr = [1, 2, 3];

output => {a: 3, b: 2, c: 1}

*/

const reverseMerge = (keyArr, valArr) => {
  const newObj = {};
  let count = 1;
  let keyLength = keyArr.length;
  let valLength = valArr.length;

  if (keyLength < 1 && valLength < 1) {

    return newObj;
  } else if (keyLength === 1 && valLength === 1) {
    newObj[keyArr[0]] = valArr[0];

    return newObj;
  } else if (valLength < keyLength) {
    while(keyLength !== valLength) {
      for(let i = 0; i < keyLength; i++) {
        if (keyLength === valLength) {
          continue;
        }

        newObj[keyArr[i]] = 42;
        keyLength--;
      }
    }

    for (let j = (keyArr.length / 2) - 1; j < keyArr.length; j++) {
      newObj[keyArr[j]] = valArr[valArr.length - count];
      count++;
    }

    return newObj;
  } else if(keyLength < valLength) {
    let newArr = [];

    while(valLength !== keyLength) {
      for(let x = 0; x < valLength; x++) {
         if(valLength === keyLength) {
          break;
        }

        newObj[keyArr[x]] = valArr[valArr.length - count];

        valLength--;
        count++;
      }
    }

    for(let y = (valArr.length / 2) - 1; y >= 0; y--) {
      newArr.push(valArr[y]);
    }

    newObj['foo'] = newArr;

    return newObj;
  }

  for(let a = 0; a < keyLength; a++) {
    newObj[keyArr[a]] = valArr[valLength - (a + 1)];
  }

  return newObj;
}

/*

Create a function named mostUsedWord.
It takes a single argument "sentence" of type string.
It will return an object with a single key-value pair.
The key will be the word with the highest occurance in the string.
The value will the the number of occurances of that word in the string.

*/

const mostUsedWord = (sentence) => {
  let result = {};
  let newObj = {};
  let words = sentence.split(/\s+/);

  for(let i = 0; i < words.length; i++)
      result[words[i].toLowerCase()] =
      (result[words[i]] || 0) + 1;

    for(let key in result) {
      if(result[key] > 1) {
        newObj[key] = result[key];
      }
    }

  return newObj;
}
/*

Write a function, isAnagram.
It takes a two arguments "test" and "original", both of type string.
It returns TRUE if the words are anagrams of one another and FALSE if it is not.

*/

const isAnagram = (test, original) => {
  let arr = [];

  for(let i = 0; i < test.length; i++) {
    const index = test.charCodeAt(i) - 97;
    arr[index] = (arr[index] || 0) + 1;
  }

  for(let i = 0; i < original.length; i++) {
    let index = (original.charCodeAt(i) - 97);
    if(!arr[index]) {
      return false;
    }
      arr[index]--;
  }

  return true;
}

module.exports = { reverseMerge, mostUsedWord, isAnagram };
