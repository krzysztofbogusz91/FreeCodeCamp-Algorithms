/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()

*/

//My solution


function translatePigLatin(str) {
    var regOne = /[aeiouy]/g;

    if (str.search(regOne) === 0) {
        return str + "way";
    } else {
        return str.substring(str.search(regOne), str.length) + str.substring(0, str.search(regOne)) + "ay";
    }

    return str.search(regOne);

}

translatePigLatin("caonsonant");
