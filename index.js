// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length > 1) {
    // console.log(myString)
    return reverseString(myString.substring(1)) + myString[0];
  } else {
    return myString;
  }
}

function isPalindrome(myString) {
  if (myString.length > 1) {
    if (myString[0] === myString[myString.length - 1]) {
      return isPalindrome(myString.substring(1, myString.length - 1));
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function addUpTo(array, index) {
  if (index !== 0) {
    let add = array.shift();
    array[0] += add;
    // as the array gets smaller the index goes down as well
    return addUpTo(array, index - 1);
  }
  return array[0];
}

// console.log(addUpTo([1, 4, 5, 3], 2) )//should be 10

// Finds the largest number in an array
function maxOf(array) {
  if (array.length !== 1) {
    //check if array[0] > array[1]
    if (array[0] > array[1]) {
      //array.slice(1,2)
      array.splice(1, 2); //this removes array[1]
      return maxOf(array);
    } else {
      //else array.pop()
      array.shift();
      return maxOf(array);
    }
  } else {
    return array[0];
  }
}

// console.log(maxOf([1, 4, 5, 3]))

function includesNumber(array, includes) {
  // if array has any el
  console.log(array, includes)
  if (array.length > 0) {
    // if array[0] === includes
    if (array[0] === includes) {
      return true;
    } else {
      // else .shift array and call the function
      array.shift();
      return includesNumber(array, includes);
    }
  } else {
    // else
    return false;
  }
}

console.log( includesNumber([1, 4, 5, 3], 5))
