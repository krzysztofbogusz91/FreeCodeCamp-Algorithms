//Function for factorialize a number

function factorialize(num) {
  
 
 var sum = 1;
  
  for (i = 1; i <= num; i ++){
    sum = sum * i; 
  }
  return sum;
}

factorialize(5);