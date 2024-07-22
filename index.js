function hasTargetSum(array, target) {
  // Write your algorithm here
  let i = 0;
  for (i = 0; i < array.length; i++) {
    let x = array[0];
    let y = array[i + 1];
    let sum = x + y;
    if (sum === target) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
hasTargetSum([1, 2, 5], 7);
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  START
  ADD NUMBER 1 TO OTHERS AND RETURN TRUE IF SUM = TARGET
  ELSE ADD NUMBER 2 TO OTHERS AND RETURN TRUE IF SUM = TARGET
  ELSE ADD NUMBER 3 TO OTHERS AND RETURN TRUE IF SUM = TARGET
  ...
  ELSE RETURN FALSE
  STOP
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
// add your own custom tests in here
//   console.log('Expecting: true');
//   console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log('');

//   console.log('Expecting: true');
//   console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log('');

//   console.log('Expecting: false');
//   console.log('=>', hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;
