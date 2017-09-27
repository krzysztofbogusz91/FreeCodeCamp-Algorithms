/*
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()
*/

//My solution


function myReplace(str, before, after) {
    var check = after.split("");
    var startPo = str.indexOf(before); //18

    str = str.split("");
    if (str[startPo] !== check[0] && str[startPo] === str[startPo].toUpperCase()) {
        check[0] = check[0].toUpperCase();
    }


    check = check.join("");
    str = str.join("");
    str = str.replace(before, check);


    return str;
}

myReplace("Let us go to the store", "store", "mall");
