//done with substring functions 
function titleCase(str) {
  
  str = str.split(" ");
  for (i = 0; i < str.length; i++){
    
   str[i] = str[i].substring(0,1).toUpperCase() + str[i].substring(1,str[i].length).toLowerCase(); 
    
  }
  
  
  return str.join(" ");
}

titleCase("I'm a little tea pot");

//note to my self next time with forEach function;
