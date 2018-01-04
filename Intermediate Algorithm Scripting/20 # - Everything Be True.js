/*

Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

//My solution


function truthCheck(collection, pre) {

    return collection.every(function (e) {
        return e.hasOwnProperty(pre) && Boolean(e[pre]);
    });

}

truthCheck([{
    "user": "Tinky-Winky"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
