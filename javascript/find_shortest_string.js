function findShortestString(arr) {
  let minLen = arr[0].length;
  let ans = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < minLen) {
      minLen = arr[i].length;
      ans = arr[i];
    }
  }

  return ans;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const Llist = ['oldfashioned', 'loose', 'zany', 'second', 'pass', 'living', 'scarecrow', 'example', 'tacky', 'youthful', 'interfere', 'ball', 'count', 'defeated', 'free', 'zephyr', 'sweater', 'suit', 'sin', 'disarm', 'park', 'writer', 'steadfast', 'skin', 'military', 'special', 'quack', 'bike', 'abaft', 'longing', 'hands', 'upset', 'cream', 'screw', 'sweltering', 'unknown', 'check', 'fierce', 'trail', 'supply', 'cruel', 'steep', 'hurried', 'precede', 'violet', 'daffy', 'harmonious', 'book', 'knotty', 'abhorrent', 'drab', 'idiotic', 'purple', 'amusement', 'cross', 'lamp', 'realize', 'nation', 'pretend', 'hurt', 'butter', 'aware', 'tendency', 'cushion', 'lettuce', 'cracker', 'wipe', 'army', 'oceanic', 'sleet', 'soft', 'loss', 'adventurous', 'careful', 'bell', 'curious', 'grain', 'dynamic', 'pat', 'workable', 'badge', 'tank', 'roof', 'rebel', 'grandmother', 'overflow', 'damage', 'bat', 'secondhand', 'twig', 'elite', 'question', 'meat', 'wooden', 'prickly', 'guess', 'salt', 'afraid', 'obnoxious', 'popcorn'];
  const Slist = ['asemiverylongword', 'aword', 'hellothere'];
  
  const start = new Date;
  for (let a = 0; a < 1000; a++) {
    findShortestString(Llist);
    findShortestString(Slist);
  }
  const end = new Date;
  const avg = (end.getTime() - start.getTime()) / 2000;
  console.log(`${avg} ms`);
}

module.exports = findShortestString;

/*
initialize variable minLen to equal the length of the first word of the array
initialize variable ans to equal the first word of the array

loop length of array times but start at the second word
  if the cuurent iteration word length is less than the current min length
    minLen = current iteration word length
    ans = current iteration word

return ans
*/

/*
The variable minLen is initialized and set to the array's first word length to set a comparison basis. 
The variable ans is initialized and set to the array's first word to set a comparison basis.
A for loop is set to iterate through every word of the array.
Inside the for loop an if statement is created to compared the old minLen and ans to the current iteration. The values are swapped if statment is true.
After the for loop is concluded, then the ans is returned.
*/