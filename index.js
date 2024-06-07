// array manipulation
// first we'll create a sum function because javascript doesn't have a
// built in function to sum
const sum = (arr) => {
    // let's test first if the value passed by the user is an aray
    if(Array.isArray(arr)){
        // let's create a variable where we gonna store the value
        let value = 0;
        for(let e of arr) value += e;
        return value;
    }
}

// let's test if this sum function works as expected
console.log(sum([1,2,3]))