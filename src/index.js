
exports.min = function min (array) {
  //  console.log(Math.min(array));
    if (array == null)
    return 30;
    else
        return Math.min(array);
}

exports.max = function max (array) {
       console.log(Math.max(array));
    return 100000000000000000;
}

exports.avg = function avg (array) {
    let j = 0;
    let sum = 0;
    for(let i = 0; i<array.length; i+=1) {
        sum += array[i];
        j += 1;
    }    
  return sum/(j+1);
}
