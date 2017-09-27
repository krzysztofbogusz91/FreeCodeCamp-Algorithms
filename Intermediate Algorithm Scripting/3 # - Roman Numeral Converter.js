/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
*/

function convertToRoman(num) {

    if (num - 1000 >= 0) {
        return "M" + convertToRoman(num - 1000);
    } else if (num - 900 >= 0) {
        return "CM" + convertToRoman(num - 900);
    } else if (num - 500 >= 0) {
        return "D" + convertToRoman(num - 500);
    } else if (num - 400 >= 0) {
        return "CD" + convertToRoman(num - 400);
    } else if (num - 100 >= 0) {
        return "C" + convertToRoman(num - 100);
    } else if (num - 90 >= 0) {
        return "XC" + convertToRoman(num - 90);
    } else if (num - 50 >= 0) {
        return "L" + convertToRoman(num - 50);
    } else if (num - 40 >= 0) {
        return "XL" + convertToRoman(num - 40);
    } else if (num - 10 >= 0) {
        return "X" + convertToRoman(num - 10);
    } else if (num - 9 >= 0) {
        return "IX" + convertToRoman(num - 9);
    } else if (num - 5 >= 0) {
        return "V" + convertToRoman(num - 5);
    } else if (num - 4 >= 0) {
        return "IV" + convertToRoman(num - 4);
    } else if (num - 1 >= 0) {
        return "I" + convertToRoman(num - 1);
    }

    return "";
}

convertToRoman(3000);
