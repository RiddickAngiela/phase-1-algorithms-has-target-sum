function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const comp = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (comp === array[j]) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
   O(n^2)
*/

/* 
  Add your pseudocode here
  -for(elements(i) in the array){
    let comp=target-array[i]}
  -for(rest of the elements(j) in the array){
      if(array[j]===comp){
        return true
      }
      else{
        return false
      }
  }
 
*/

/*
  Add written explanation of your solution here
  -We are looping through an array looking for 2 pairs of numbers that add up to target
  -We can get the complement of the current element(array[i]) by doing target-array[i]
  -We then look for the complement through the rest of the array and if found we return true; else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
