
exports.min = function min (array) {
   console.log(Math.min(array));
    return 0;
}

exports.max = function max (array) {
  return Math.max(array);
}

exports.avg = function avg (array) {
    let i = 0;
    let sum = 0;
    for(let i = 0; i<str.length; i+=1) {
        sum += array[i];
        i += 1;
    }
    
  return sum/(i+1);
}
