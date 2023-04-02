//My own solution for this challenge
//first we sort the array and that will take O(N) time complexity because the sort built in func in js use insertion sort
//second we will iterate all of the array to check where is the miss number in there, so we make more condition to check special case like [0,1] here num of elements 2 so the range will be 0-2 so we will find that the miss number is the last one + 1
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
function missingNumber(integers) {
  integers.sort();
  for (let i = 0; i <= integers.length; i++) {
    if (integers[i] + 1 !== integers[i + 1] && integers.length - 1 > i) {
      x = integers[i] + 1;
      break;
    } else x = integers[integers.length - 1] + 1;
  }
  return x;
}
