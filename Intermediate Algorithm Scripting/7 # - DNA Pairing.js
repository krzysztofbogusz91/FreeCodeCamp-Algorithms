/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.push()
String.prototype.split()
*/

//My solution

function pairElement(str) {

    str = str.split("");

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            str[i] = [str[i]];
            str[i].push("T");
        } else if (str[i] === "T") {
            str[i] = [str[i]];
            str[i].push("A");
        } else if (str[i] === "C") {
            str[i] = [str[i]];
            str[i].push("G");
        } else if (str[i] === "G") {
            str[i] = [str[i]];
            str[i].push("C");
        }

    }

    return str;
}

pairElement("TAA");
