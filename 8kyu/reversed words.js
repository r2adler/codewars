function reverseWords(str){
  const array = str.split(' ');
  console.log(array)
  let result = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }
  return result.join(' ');
}
