// const nums = [10, 20, 30];
// const nums2 = [10, 20, 99];
// nums[2] = 99;
//console.log(nums);

// function getLastValue(array) {
//   const lastValue = array.length - 1;
//   return array[lastValue];
// }

// console.log(getLastValue(nums));
// console.log(getLastValue(nums2));

// function arraySwap(array) {
//   const lastIndex = array.length -1; // 3 - 1 = 2, so saves lastIndex as (2)

//   const lastValue = array[lastIndex]; //gets value of array(2) which is 30
//   const firstValue = array[0]; //gets first index value

//   array[0] = lastValue; //assigns 30 as index 0
//   array[lastIndex] = firstValue; //assigns last index value as what firstValue saved initially.

//   return array;
// }

// console.log(arraySwap(nums));
// console.log(arraySwap(nums2));
// console.log(arraySwap(['hi', 'hello', 'hey']));

// for(i = 0; i <= 10; i++) {
//   console.log(i);
//   i += 1;
// }

// for(i = 5; i > 0; i--) {
//   console.log(i);
// }

// let number = 0;

// while (number <= 10) {
//   console.log(number);
//   number += 2;
// }

// let number2 = 5;

// while (number2 > 0) {
//   console.log(number2);
//   number2 -= 1;
// }

const numArray = [ 1, 2, 3 ];
const numArray2 = [ 10, 20, 30 ];

// for(i = 0; i < numArray.length; i++) {
//   const result = [];
//   const num = numArray[i];
//   result.push(num + 1);
// }
// console.log(result);

// function addOne(array) {
//   const result = [];
//   for(i = 0; i < array.length; i++) {
//     const num = array[i];
//     result.push(num + 1);
//   }
//   return result;
// }
// console.log(addOne([1,2,3]));
// // console.log(addOne([3,4,5]));

// function addNum(array, num) {
//   const result = [];
//   for(let i = 0; i < array.length; i++) {
//     const index = array[i];
//     result.push(index + num);
//   }
//   return result;
// }

// console.log(addNum(numArray, 10));

function addArrays(array1, array2) {
  const result = [];
  for(let i = 0; i < array1.length; i++) {
    let index1 = array1[i];
    let index2 = array2[i];
    result.push(index1 + index2);
  }
  return result;
}

console.log(addArrays(numArray, numArray2));

function countPositive(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 ) {
      result++;
    }
  }
  return result;
}

console.log(countPositive([1, -1, 15, -3]));
console.log(countPositive([1, -1, 15, -3, -7, 1]));

function minMax (nums) {
  const result = {min: [0], max: [0]}; //starts with the 1st value in the 1st index for comparison reasons
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < result.min) {
      result.min = nums[i];
    } 

    if(nums[i] > result.max) {
      result.max = nums[i];
    }
  }
  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
