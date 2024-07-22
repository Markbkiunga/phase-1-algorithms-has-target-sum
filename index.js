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
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) {
        return true;
      }
    }
  }
  return false;
}
// console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  START
  Iterate over array
  Let complementary = Target - Number
  If there is complementary in the rest of the array
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
