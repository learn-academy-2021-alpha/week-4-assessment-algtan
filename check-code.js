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

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];

console.log( shuffleRemainingItems(colors1) );
console.log( shuffleRemainingItems(colors2) );


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

const cubeAndSum1 = [2, 3, 4];
const cubeAndSum2 = [0, 5, 10];

console.log( sumOfAllCubed(cubeAndSum1) )
console.log( sumOfAllCubed(cubeAndSum2) )


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

const nums1 = [3, 56, 90, -8, 0, 23, 6];
const nums2 = [109, 5, 9, -59, 8, 24];

console.log( minAndMax(nums1) );
console.log( minAndMax(nums2) );


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

const testString1 = "albatross";
const testString2 = "jabberwocky";

console.log( alternatingCaps(testString1) );
console.log( alternatingCaps(testString2) );


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

const testArray1 = [3, 7, 10, 5, 4, 3, 3];
const testArray2 = [7, 8, 2, 3, 1, 5, 4];

console.log( noDuplicateNums(testArray1, testArray2) );