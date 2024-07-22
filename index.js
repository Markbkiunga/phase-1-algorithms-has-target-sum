/*My Code
function hasTargetSum(array, target) {
  // Write your algorithm here
  let i = 0;
  for (let j = 0; j < array.length; j++) {
    let x = array[i];
    let y = array[j + 1]; //Not supposed to add the number itself
    let sum = x + y;
    if (sum === target) {
      return true;
    } else {
      let newX = array[i + 1];
      let newY = array[i + 1 + 1];
      let newSum = newX + newY;
      if (newSum === target) {
        return true;
      }
    }
  }
  return false;
}

console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));
*/
//Runtime complexity of O(3n+2)=O(n)
function hasTargetSum(array, target) {
  //1 step
  const seenNumbers = new Set();
  for (let number of array) {
    //n steps
    const complement = target - number;
    //n steps
    if (seenNumbers.has(complement)) {
      //n steps
      return true;
    }
    seenNumbers.add(number);
  }
  //1 step
  return false;
}

/*
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    //n steps
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      //n*n steps
      if (array[j] === complement) {
        return true;
      }
    }
  }
  return false;
}
*/
/* 
  Write the Big O time complexity of your function here
  Runtime complexity: O(n^2)
  Space complexity: O(n)
*/

/* 
  Add your pseudocode here
  START
  Create an object to keep track of numbers we have already seen
  Iterate over array
  Let complementary = Target - Number
  Check if any key in our object is the complement
  If so return true
  Else Add the number to the object  
  return true
  Else return false

  STOP
*/

/*
  Add written explanation of your solution here
  Using for loop we iterate over the elements performing the subtraction of the current element from the target
  We assign the result from the operation above to complement
  We iterate over the elements which follow the 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', hasTargetSum([1, 2, 5], 4));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', hasTargetSum([4], 4));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
