/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str1) {
  let str = str1.toLowerCase();
  let s = "";
  let a = "";
  for(let i=str.length-1;i>=0;i--){
    if(str[i] >= 'a' && str[i] <= 'z'){
      s += str[i];
    }
  }
  //console.log(s)
  for(let i=0;i<str.length;i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
      a += str[i];
    }
  }
  //console.log(a)
  if(a.length != s.length){return false;}
  for(let i=0;i<s.length;i++){
    if(a[i] != s[i]){
      return false;
    }
  }
  return true;
}

//console.log(isPalindrome("hello"));


module.exports = isPalindrome;
