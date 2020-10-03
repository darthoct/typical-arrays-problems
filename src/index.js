
exports.min = function min (array) {
    
   console.log(Math.min(array));
    return 0;
}

exports.max = function max (array) {
   console.log(Math.max(array));
    return 0;
}

exports.avg = function avg (array) {
    let i = 0;
    let sum = 0;
    for(let i = 0; i<array.length; i+=1) {
        sum += array[i];
        i += 1;
    }
    console.log(sum/(i+1));
  return 0;
}
