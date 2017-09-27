/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

//My solution

function sumAll(arr) {

    var myNum = 0;

    arr = arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = arr[0]; i <= arr[1]; i++) {
        myNum = myNum + i;
    }


    return myNum;
}

sumAll([1, 4]);
