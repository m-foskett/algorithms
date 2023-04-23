// ==========================================================================
// Average Sub Array
const averageSubArrays = (arr, k) => {
    const averages = [];
    // Iterative Implementation ~~~~~~~~~~~~~~~~~
    // for (let i = 0; i <= arr.length - k; i++){
    //     let sum = 0;
    //     for(let j = 0; j < k; j++){
    //         sum += arr[i + j];
    //     }
    //     averages.push(sum/k);
    // }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Sliding Window Implementation
    let windowStart = 0, windowSum = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd];
        if(windowEnd >= (k-1)){
            // Add Average of current window to average array
            averages.push(windowSum/k);
            // Subtract windowStart value from windowSum
            windowSum -= arr[windowStart];
            // Move the windowStart over by one
            windowStart++;
        }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return averages;
}
// Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const arr1 = [1,2,3,4,5];
// const k1 = 3;
// const arr2 = [1,3,2,6,-1,4,1,8,2];
// const k2 = 5;
// console.log(averageSubArrays(arr1, k1))
// console.log(averageSubArrays(arr2, k2))
// ==========================================================================
// Smallest Contiguous Sub Array
const smallestContiguousSubArray = (arr, s) => {
    let windowStart = 0, windowSum = 0, minLengthSoFar = Infinity;
    // For each element
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        // Grow Window
        windowSum += arr[windowEnd];
        // While the windowSum >= s
        while(windowSum >= s){
            // Check if window length is smaller than minLengthSoFar
            let currentWindowLength = windowEnd - windowStart + 1;
            minLengthSoFar = Math.min(minLengthSoFar, currentWindowLength);
            // Decrement the windowSum
            windowSum -= arr[windowStart];
            // Shrink window
            windowStart++;
        }
    }
    return minLengthSoFar === Infinity ? 0 : minLengthSoFar;
}
// Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const arr1 = [1,3,2,2,4,5];
// const k1 = 6;
// const arr2 = [2,1,5,2,8];
// const k2 = 7;
// console.log(smallestContiguousSubArray(arr1, k1))
// console.log(smallestContiguousSubArray(arr2, k2))
// ==========================================================================
// Longest Substring With K distinct Characters
// Notes:
// 1. Initialise windowStart and windowEnd at the 0th index
// 2. Add character in window to the letterFrequencyTracker if it doesn't exist there
// 3. Increment character frequency in letterFrequencyTracker
// 4. Is the number of letters in the letterFrequencyTracker greater than k?
//      - If yes:
//          A. Shrink window until the letters in the letterFrequencyTracker are <= k
//          B. Repeat from Step 2
//      - If no:
//          A. Grow sliding window to next element by incrementing windowEnd
//          B. Capture window length in longestSubStrSoFar
//          C. Repeat from Step 2
const longestSubstringWithKDistinctChars = (str, k) => {
    let windowStart = 0, letterFrequencyTracker = {}, longestSubStrSoFar = 0;
    // Growing Window with each iteration
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
        let windowEndChar = str[windowEnd]
        if (!letterFrequencyTracker[windowEndChar]){
            letterFrequencyTracker[windowEndChar] = 0;
        }
        letterFrequencyTracker[windowEndChar]++

        // Shrink window when letters amount is > k
        while (Object.keys(letterFrequencyTracker).length > k) {
            let windowStartChar = str[windowStart]
            // Remove Char from window
            letterFrequencyTracker[windowStartChar]--
            if(letterFrequencyTracker[windowStartChar] === 0){
                delete letterFrequencyTracker[windowStartChar];
            }
            windowStart++;
        }
        // Now that there is k distinct letters in window, check for new max substring
        longestSubStrSoFar = Math.max(longestSubStrSoFar, windowEnd - windowStart + 1);
    }
    return longestSubStrSoFar;
}

// Testing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(longestSubstringWithKDistinctChars('acccpbbebi',3));// 6
console.log(longestSubstringWithKDistinctChars('aaaabbcccd',1));// 4
console.log(longestSubstringWithKDistinctChars('abcdefg',10)); // 7