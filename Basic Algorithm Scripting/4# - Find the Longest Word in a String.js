//easy function that finds longest word in a string

function findLongestWord(str) {
  str = str.split(" ");
  let longest = 0;
  for(i=0;i<str.length; i++){
    if(str[i].length>longest){
      longest = str[i].length;
    }
    
  }
  
  
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");