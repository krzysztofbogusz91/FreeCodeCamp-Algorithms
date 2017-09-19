/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
*/



function rot13(str) {

    //capital leters in charCode A - 65 to Z  - 90
    // we need letter number in char code + 13 

    str = str.split("");

    function getNuberAtCh(arr) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].charCodeAt(0) <= 90 && arr[i].charCodeAt(0) >= 65)
                arr[i] = arr[i].charCodeAt(0) - 13;
        } //end 1 for loop


        for (var j = 0; j < arr.length; j++) {
            if (arr[j] < 65 && Number.isInteger(arr[j])) {
                arr[j] = 91 - (65 - arr[j]);
            }
            if (Number.isInteger(arr[j])) {
                arr[j] = String.fromCharCode(arr[j]);
            }
        } //end 2 for loop


    } //end getNum funct


    getNuberAtCh(str);


    return str.join("");
}


rot13("SERR PBQR PNZC");
