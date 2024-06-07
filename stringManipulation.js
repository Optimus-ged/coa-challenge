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

// let's now create the assii converter function for our current challenge
const asiiConverter = (str) => {
  // let's make sure the value passed is really a string
  if (typeof str === "string") {
    // let's create a value that will be receiving the converted values
    let converted = "";

    // we loop in the string to get the asii code of each character
    for (let i in str) converted = `${converted} ${str.charCodeAt(i)}`;
    return converted;
  }
};

// let's check if it works as expected
// console.log(asiiConverter("pzza"))