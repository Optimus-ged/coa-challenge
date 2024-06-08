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

// let's now apply the string transformation
const transform = (str) => {
  // let's make sure the value passed is a string
  if (typeof str === "string") {
    // we have to apply both reverse and convert when the string passed is divisible
    // by both 3 and 5
    if (str.length % 3 === 0 && str.length % 5 === 0) {
      let reversedStr = reverse(str);
      return asiiConverter(reversedStr);
    }

    // we can only reverse if the string is divisible by 3
    else if (str.length % 3 === 0) {
      return reverse(str);
    }

    // only convert when the length is divisible by 5
    else if (str.length % 5 === 0) {
      return asiiConverter(str);
    }
  }
};

// let's check
console.log(transform("pizza"));