/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

//My solution
//WARNING - Wery slow but working code!!! Need to find other faster solution;
function smallestCommons(arr) {
    var range = [];
    arr = arr.sort();

    for (var i = arr[0]; i <= arr[1]; i++) {
        range.push(i);
    }

    var maxNum = range[range.length - 1];
    var minNum = range[0];
    var numNum = range[range.length - 1];

    var target = 0;
    while (target === 0) {
        for (var l = minNum; l <= maxNum; l++) {
            console.log(l, numNum);
            if (numNum % l === 0) {
                target = 1;
            } else {
                target = 0;
                numNum = numNum + maxNum;
                break;
            }
        }
    }
    console.log(target);
    return numNum;
}

smallestCommons([1, 13]);
