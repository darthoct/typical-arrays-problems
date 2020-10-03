
exports.min = function min (array) {
  //  console.log(Math.min(array));
    if (array.length == 0)
    return 0;
    else
        return Math.min(array);
}

exports.max = function max (array) {
    if (array.length==0)
        return 0;
    else
       return Math.max(array);
  
}

exports.avg = function avg (array) {
    if (array.length==0)
        return 0;
    else {
    let j = 0;
    let sum = 0;
    for(let i = 0; i<array.length; i+=1) {
        sum += array[i];
        j += 1;
    }    
  return sum/(j+1);}
}
