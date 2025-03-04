// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.

function collectStrings(obj) {
    let stringsArray = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArray.push(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            stringsArray = stringsArray.concat(collectStrings(obj[key]));
        }
    }
    return stringsArray;
}

// Example usage:
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

console.log(collectStrings(obj)); // Output: ["foo", "bar", "baz"]
