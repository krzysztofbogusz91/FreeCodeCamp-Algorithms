/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.reduce()
*/

//My solution
function uniteUnique(arr) {

    var arr2 = Array.prototype.slice.call(arguments);
    var arr3 = [];

    arr2.forEach(function (a) {
        console.log(a);
        a.forEach(function (b) {
            if (arr3.indexOf(b) === -1) {
                arr3.push(b);
            }

        });

    });

    return arr3;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
