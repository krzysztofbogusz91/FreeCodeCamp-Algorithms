
function chunkArrayInGroups(arr, size) {
  var arr3 = [];
  var i = 0;
  
  while(i < arr.length){
  
    arr3.push(arr.slice(i,size + i));
    i = i + size;      
 // var arr2 =arr.slice(size, arr.length;
  
  //arr = arr1.concat(arr2);
  }
  return arr3;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);