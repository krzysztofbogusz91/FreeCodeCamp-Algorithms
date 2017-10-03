/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

//My solution



function fearNotLetter(str) {
    var miss = [];
    var good = [];
    var wrong = [];

    for (var i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {
        good.push(String.fromCharCode(i));

    }

    str = str.split("");

    for (var j = 0; j < str.length; j++) {
        if (good[j] !== str[j]) {
            wrong.push(good[j]);
        }
    }

    return wrong[0];

}


fearNotLetter("abcdefghjklmno");
