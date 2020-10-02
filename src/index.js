
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!(matrix instanceof Array)||matrix=='undefined'||!(Array.isArray(matrix) && matrix.length)){return []}  
  var number = '';
  for(i=0;i<matrix.length;i++){
    if(i%2==0){ number+=(pushElem(matrix[i])) }
    else{ number+=(pushElem(matrix[i].reverse())) }
  }
  var result=number.slice(0,-1);
  return (result).split(" ");
}

function pushElem(arr){
  var res ='';
  arr.forEach(element => {
    res+=element.toString()+' ';
  });
  return res;
}