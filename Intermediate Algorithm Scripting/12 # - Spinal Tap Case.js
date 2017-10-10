/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()deAt()
String.fromCharCode()
*/

//My solution


function spinalCase(str) {

    var reg = /\s+|_+/g;

    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');


    return str.replace(reg, '-').toLowerCase();
}


spinalCase('This Is Spinal Tap');
