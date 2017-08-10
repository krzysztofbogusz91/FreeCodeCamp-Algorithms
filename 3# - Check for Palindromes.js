//checking for a palindromes

function palindrome(str) {
  
  return str.replace(/[_\s,.():/\//-]/g,"").toLowerCase().split("").reverse().join("") === str.replace(/[_\s,.():/\//-]/g,"").toLowerCase(); 
 
}



palindrome("0_0 (: /-\ :) 0-0");