/*

Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

*/

//My solution



function steamrollArray(arr) {

    var singArr = [];

    function flatArr(a) {
        if (Array.isArray(a) === false) {
            singArr.push(a);
        } else {
            //if not arr refer to each element and to go deeper
            for (var i = 0; i < a.length; i++) {
                flatArr(a[i]);
            }
        }
    }

    arr.forEach(flatArr);
    // I'm a steamroller, baby
    return singArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
