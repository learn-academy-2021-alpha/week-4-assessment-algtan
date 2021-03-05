// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleRemainingItems", () => {
    it("return array with first item removed and the remaining items shuffled", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"];
        const colors1Expected = ["yellow", "blue", "pink", "green"];
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];
        const colors2Expected = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];

        expect( shuffleRemainingItems(colors1).sort() ).toEqual( colors1Expected.sort() );
        expect( shuffleRemainingItems(colors2).sort() ).toEqual( colors2Expected.sort() );
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is an array
const shuffleRemainingItems = (array) => {
    // Remove the first element from the array
    array.shift();
    // Shuffle the remaining elements in the array
    // Iterate through the smaller array, working backwards to shuffle the items
    for (let i = array.length - 1; i > 0; i--) {
        // Create a variable 'j' that will be used to choose a random index from the subarray of unshuffled indices
        // Initially, 'j' will be a random number from 0 to 3 for a smallerArray length of 4
        let j = Math.floor(Math.random() * (i + 1));
        // Create a temporary variable to store the value of the last element (index 'i') of the unshuffled subarray
        let temp = array[i];
        // Swap the value at the last element (index 'i') of the unshuffled subarray with a randomly chosen element in the unshuffled subarray (index 0 to index 'i')
        // NOTE: It could be swapped with itself
        array[i] = array[j]
        // Store the initial unshuffled element at index 'i', now in temp, into index 'j'
        array[j] = temp;
    }
    // Return shuffled array
    return array;
}



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumOfAllCubed", () => {
    it("return a number that is the sum of the array's elements cubed", () => {
        const cubeAndSum1 = [2, 3, 4]
        const cubeAndSum2 = [0, 5, 10]
        expect(sumOfAllCubed(cubeAndSum1)).toEqual(99);
        expect(sumOfAllCubed(cubeAndSum2)).toEqual(1125);
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is an array
const sumOfAllCubed = (array) => {
    // Create a new array that stores the cube of the initial array's values
    cubedArray = array.map(value => {
        return value ** 3;
    })

    // Use an accumulator to go through the cubedArray to sum all the elements
    let accumulator = 0;

    // Iterate through the cubedArray to get the sum
    cubedArray.forEach(value => {
        accumulator += value;
    });
    
    // Return a number that is the sum of all the elements cubed
    return accumulator;
}


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

describe("minAndMax", () => {
    it("return an array that contains the minimum and maximum of the input array", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6];
        const nums1Expected = [-8, 90];
        const nums2 = [109, 5, 9, -59, 8, 24];
        const nums2Expected = [-59, 109];
        expect(minAndMax(nums1)).toEqual(nums1Expected);
        expect(minAndMax(nums2)).toEqual(nums2Expected);
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is an array
const minAndMax = (array) => {
    // Create a variable to store the minimum and set it initially to the first element of the array
    let min = array[0];
    // Create a variable to store the maximum and set it initially to the first element of the array
    let max = array[0];

    // Iterate through the array and see if an element is smaller than the current minimum, or larger than the current maximum
    array.forEach(value => {
        // Update the minimum if the value is smaller than the current minimum
        if (value < min) {
            min = value;
        // Update the maximum if the value is larger than the current maximum
        } else if (value > max) {
            max = value;
        }
    })
    
    // Return an array that contains the minimum and the maximum values of the input array
    return [min, max];
}



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

describe("alternatingCaps", () => {
    it("return a string that alternates capital letters for an input string", () => {
        const testString1 = "albatross";
        const testString1Expected = "aLbAtRoSs";
        const testString2 = "jabberwocky";
        const testString2Expected = "jAbBeRwOcKy";
        expect(alternatingCaps(testString1)).toEqual(testString1Expected);
        expect(alternatingCaps(testString2)).toEqual(testString2Expected);
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is a string
const alternatingCaps = (string) => {
    // Split the string into an array
    strArray = string.split('');
    // Iterate through the array in which we capitalize the letter based on its index
    alternatingCapArray = strArray.map((value, index) => {
        // Check if the index is odd using the modulo
        if (index % 2 != 0) {
            // Capitalize the letter if it is an odd index
            return value.toUpperCase();
        // Otherwise do nothing to the value
        } else {
            return value;
        }
    })

    // Join the array back together into a string
    // Return a string with alternating capitalization
    return alternatingCapArray.join('');
}


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDuplicateNums", () => {
    it("return an array with no duplciate values from an input of two arrays", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3];
        const testArray2 = [7, 8, 2, 3, 1, 5, 4];
        const expectedArrFromTestArrs = [3, 7, 10, 5, 4, 8, 2, 1];
        expect( noDuplicateNums(testArray1, testArray2) ).toEqual(expectedArrFromTestArrs);
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in two arguments, both of which are arrays
const noDuplicateNums = (array1, array2) => {
    // Create an empty array that will store the unique values
    uniqueArr = [];

    // Join the two input arrays together into one array
    joinedArr = array1.concat(array2);
    
    // Iterate through the joined arrays, adding the unique values to the new array
    joinedArr.forEach(value => {
        // Check if the new array does not already contain the value
        if (!uniqueArr.includes(value)) {
            // If it doesn't add the value to that array
            uniqueArr.push(value);
        }
    })

    // Return a single array with no duplicate values
    return uniqueArr;
}