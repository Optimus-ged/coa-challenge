// we'll need a reverse function that we'll help us to reverse string when we want
const reverse = (str) => {
  // let's make sure the value passed is actually a string
  if (typeof str === "string") {
    // let's initialize the variable that will be receiving the reversed value
    let value = "";
    // let's loop in the string and actually reverse the string passed
    for (let e of str) value = `${e}${value}`;
    return value;
  }
};

// let's test if it works
// console.log(reverse("metu"))
