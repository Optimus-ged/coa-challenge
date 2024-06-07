// array manipulation
// first we'll create a sum function because javascript doesn't have a
// built in function to sum
const sum = (arr) => {
  // let's test first if the value passed by the user is an aray
  if (Array.isArray(arr)) {
    // let's create a variable where we gonna store the value
    let value = 0;
    for (let e of arr) value += e;
    return value;
  }
};

// let's test if this sum function works as expected
// console.log(sum([1,2,3]))

// let's now create a function that we'll call filter to make the array manipulation
// this function will receive two values, the first one will be an array, the second one
// will be a number
const filter = (arr, target) => {
  // we need to make sure the variables types are correct
  if (Array.isArray(arr) && typeof target === "number") {
    // as we are looking for a contiguous subarray in the array whicj sums up to the
    // target, we can imediately quit the function when the target is greater than
    // the sum of the array passed, this means there's no existing contiguous array
    if (target > sum(arr)) return false;
    else {
      // let's create and initialize a contigous array variable
      let contigousArray = [];

      // let's loop inside our array passed by the user
      for (let i in arr) {
        // le't loop in the array but taking the index of the first one as the
        // starting point of the second one
        for (let x = i; x < arr.length; x++) {
          // if the sum of the contigous array plus the current value is greater then
          // the target, we need to quit and clear the sub array
          if (sum(contigousArray) + arr[x] > target) {
            contigousArray = [];
            x = arr.length;
          } else {
            // in the other case, we need to push the current value in the contigous array
            contigousArray.push(arr[x]);

            // if the sum of the contiguous array is equal to the target, we can leave
            // the function and return true
            if (sum(contigousArray) === target) return true;
          }
        }
      }
    }
  }
};

// let's test
console.log(filter([1, 2, 3, 444, 555, 6, 2, 1, 1, 9], 9));
